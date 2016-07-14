/**
 * Created by hjx on 12/14/2015.
 */
import { Observable } from 'rx-lite';
import { pushState } from 'redux-router';

export const ASSEMBLED_REQUESTS = Symbol('assembled request');
export const FILTER = Symbol('filter');
export const LINK_REQUESTS_MODE = Symbol('link requests');
export const ZIP_REQUESTS_MODE = Symbol('zip requests');
export const SINGLE_REQUEST_MODE = Symbol('single request');
export const LINK_INDETERMINATE_REQUESTS_MODE = Symbol('link indeterminate requests');
export const ZIP_INDETERMINATE_REQUESTS_MODE = Symbol('zip indeterminate requests');
export const TRANSFORMER_MODE = Symbol('dynamically change flow');

const THROW_EXCEPTION_DEFAULT = false;
const FILTER_MAP = {};

function singleRequest(action, next, lastResponse = null, lastError = null) {
    const { assembleMode, actionTypes, inMap, service, outMap, modifyActionResponse, modifyActionError, //successActionPayload,
        onSuccess, onFailure, throwException } = action;
    if (assembleMode !== SINGLE_REQUEST_MODE) {
        throw new Error('Expect a single request.');
    }
    if (typeof service !== 'function') {
        throw new Error('Expect a function as service.');
    }
    if (!Array.isArray(actionTypes) || actionTypes.length !== 3) {
        throw new Error('Expect an array of three action types.');
    }
    const throwExcep = (typeof throwException === 'boolean') ? throwException : THROW_EXCEPTION_DEFAULT;
    const [ requestType, successType, failureType ] = actionTypes;

    let observable = Observable.just({lastResponse, lastError}).doOnNext(() => {
        if (requestType != null) {
            next({type: requestType});
        }
    }).map(({lastResponse, lastError}) => {
        let r = inMap ? inMap(lastResponse) : lastResponse;
        return {lastResponse: r, lastError};
    }).flatMap(({lastResponse, lastError}) => {
        return Observable.fromPromise(service(lastResponse, lastError).then(
                response => {
                return response;
            },
                error => {
                throw error;
            }
        ));
    }).doOnNext((response) => {
        if (onSuccess) {
            onSuccess(response);
        }
        if (successType != null) {
            let payload = modifyActionResponse ? modifyActionResponse(response) : response;
            next({type: successType, response: payload});
        }
    }).map((response) => {
        let lastResponse = outMap ? outMap(response) : response;
        return {lastResponse, lastError: null};
    }).doOnError((err) => {
        if (onFailure) {
            onFailure(err);
        }
        if (failureType != null) {
            let errMsg = err.message || failureType;
            let error = modifyActionError ? modifyActionError(errMsg) : errMsg;
            next({type: failureType, error});
        }
    });

    if (!throwExcep) {
        observable = observable.catch((err) => {
            let e = err == null ? new Error('error: ' + failureType) : err;
            return Observable.just({lastResponse: null, lastError: e});
        })
    }
    ;

    return observable;
}

function linkRequest(requests, next, lastResponse = null, lastError = null) {
    return requests.reduce(function (preVal, curVal, index, array) {
        return preVal.flatMap(({lastResponse, lastError}) => {
            let observable = doRequest(curVal, next, lastResponse, lastError);
            return observable;
        });
    }, Observable.just({lastResponse, lastError}));
}

function zipRequest(requests, zip, next, lastResponse = null, lastError = null) {
    if (requests == null) {
        return Observable.just({lastResponse: null, lastError: null});
    }
    let observables = requests.map((request) => {
        return doRequest(request, next, lastResponse, lastError);
    });
    return Observable.zip(...observables, (...results) => {
        let ret = results.reduce((pre, cur) => {
            return {
                lastResponse: pre.lastResponse.concat(cur.lastResponse),
                lastError: pre.lastError.concat(cur.lastError)
            };
        }, {lastResponse: [], lastError: []});
        if (typeof zip === 'function') {
            ret = {lastResponse: zip(ret.lastResponse, ret.lastError), lastError: null};
        }
        return ret;
    });
}

function doRequest(action, next, lastResponse = null, lastError = null) {
    if (action == null) {
        return Observable.just({lastResponse: null, lastError: null});
    }
    let assembleMode = action.assembleMode;
    let requests;
    let zip;
    switch (assembleMode) {
        case TRANSFORMER_MODE:
            // 通过结果动态定义结构
            let newAction = action.transform(lastResponse, lastError);
            return doRequest(newAction, next, lastResponse, lastError);
        case LINK_REQUESTS_MODE:
            requests = action.requests;
            return linkRequest(requests, next, lastResponse, lastError);
        case LINK_INDETERMINATE_REQUESTS_MODE:
            requests = action.getRequests(lastResponse, lastError);
            return linkRequest(requests, next, lastResponse, lastError);
        case ZIP_REQUESTS_MODE:
            requests = action.requests;
            zip = action.zip;
            return zipRequest(requests, zip, next, lastResponse, lastError);
        case ZIP_INDETERMINATE_REQUESTS_MODE:
            requests = action.getRequests(lastResponse, lastError);
            zip = action.zip;
            return zipRequest(requests, zip, next, lastResponse, lastError);
        case SINGLE_REQUEST_MODE:
            return singleRequest(action, next, lastResponse, lastError);
        default :
            return Observable.just({lastResponse: null, lastError: null});
    }
}

function stringifyParam(param) {
    return JSON.stringify(param ? param : {});
}

function filter(action) {
    const filterConfig = action[FILTER];
    if (typeof filterConfig === 'undefined') {
        return true;
    }
    const { symbol, param, timeInterval } = filterConfig;
    if (!symbol) {
        throw new Error('a symbol is required to filter requests');
    }
    let timeStamp = new Date().getTime();
    let paramstr = stringifyParam(param);
    let interval = (typeof timeInterval === 'number') ? timeInterval : 1000;
    if (typeof FILTER_MAP[symbol] === 'undefined') {
        FILTER_MAP[symbol] = {};
    }
    if (typeof FILTER_MAP[symbol][paramstr] === 'undefined' ||
        timeStamp - FILTER_MAP[symbol][paramstr] > interval) {
        FILTER_MAP[symbol][paramstr] = timeStamp;
        return true;
    }

    return false;
}

function clearRequestTime(action) {
    const filterConfig = action[FILTER];
    if (typeof filterConfig === 'undefined') {
        return;
    }
    const { symbol, param } = filterConfig;
    if (!symbol) {
        return;
    }
    let paramstr = stringifyParam(param);
    if (typeof FILTER_MAP[symbol] != 'undefined' &&
        typeof FILTER_MAP[symbol][paramstr] != 'undefined') {
        delete FILTER_MAP[symbol][paramstr];
    }
}

export default  store => next => action => {
    if (typeof action[ASSEMBLED_REQUESTS] === 'undefined') {
        return next(action);
    }
    Observable.just(action).filter((action) => {
        let pass = filter(action);
        if (!pass && typeof action[FILTER].onDiscard === 'function') {
            action[FILTER].onDiscard();
        }
        return pass;
    }).map((action) => {
        return action[ASSEMBLED_REQUESTS];
    }).flatMap((request) => {
        return doRequest(request, next);
    }).subscribe(
        (x) => {
        },
        (e) => {
            console.log('final error: ' + e);
            // 处理401错误
            let msg = e.message.split(" ");
            let code = 'number'.parseInt(msg[0]);
            switch (code) {
                case 401:
                    store.dispatch(pushState(null, "/login"));
                    break;
            }
            clearRequestTime(action);
        },
        () => {
        }
    );
}
