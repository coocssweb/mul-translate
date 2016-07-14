'use strict';
import Config from './config.js';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './root';

const store = configureStore();

render(
    <Root store={store} />,
    document.getElementById('main-body')
);
