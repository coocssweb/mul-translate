/**
 * Created by zj-db0666 on 2018/10/9.
 */

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promiseMiddleware from '../middleware/promiseMiddleware';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export default (data) => {
    const enhancer = compose(
        applyMiddleware(thunk, createLogger(), promiseMiddleware),
        DevTools.instrument()
    );

    let finalCreateStore = enhancer(createStore);
    return finalCreateStore(rootReducer, data);
};
