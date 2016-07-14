// Action key that carries API call info interpreted by this Redux middleware.
export const REQUEST_API = Symbol('request api');


// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    const callAPI = action[REQUEST_API];
    if (typeof callAPI === 'undefined') {
        return next(action);
    }
    const { types, service, onSuccess, onFailure } = callAPI;

    if (typeof service !== 'function') {
        throw new Error('Expected a function as service.');
    }

    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.');
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.');
    }

    function actionWith(data) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[REQUEST_API];
        return finalAction;
    }

    const [ requestType, successType, failureType ] = types;

    next(actionWith({type: requestType}));

    return service().then(
            response => {
            if (onSuccess) {
                onSuccess(response);
            }
            next(actionWith({
                response,
                type: successType
            }));
        },
            error => {
            if (onFailure) {
                onFailure(error);
            }
            next(actionWith({
                type: failureType,
                error: error.message || 'Something bad happened'
            }));
        }
    );
};
