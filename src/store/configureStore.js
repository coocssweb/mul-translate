import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import DevTools from '../containers/devTools';
import createHistory from 'history/lib/createHashHistory';
import getRoutes from '../routes';
import thunk from 'redux-thunk';
import apiRequester from '../middleWare/apiRequester';
import assembleApiRequester from '../middleWare/assembledApiRequester.js'
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const finalCreateStore = compose(
    applyMiddleware(thunk, apiRequester, assembleApiRequester),
    reduxReactRouter({ getRoutes, createHistory }),
    DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
