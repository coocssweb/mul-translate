/**
 * 入口页
 * Created by 王佳欣 on 2018/9/27.
 */
import '@css/base/base.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import Root from './root';
const store = createStore(Immutable.fromJS({}));

ReactDOM.render(
    <Provider store={ store } >
        <Root />
    </Provider>,
    document.getElementById('app')
);
