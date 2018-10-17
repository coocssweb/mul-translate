/**
 * Created by zj-db0666 on 2018/10/9.
 */

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promiseMiddleware from '../middleware/promiseMiddleware';
import rootReducer from '../reducers';

export default (data) => {
    let finalCreateStore = applyMiddleware(thunk, createLogger(), promiseMiddleware)(createStore);
    return finalCreateStore(rootReducer, data);
};
