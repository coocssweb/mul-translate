/**
 * 入口页
 * Created by 王佳欣 on 2018/9/27.
 */
import '@css/base/base.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createStore from './store/createStore';
import Home from '@containers/Home';

const store = createStore(Immutable.fromJS({}));

ReactDOM.render(
    <Provider store={ store } >
        <Router>
            <Route path="/" component={Home}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
