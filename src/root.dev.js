/**
 * Created by zj-db0666 on 2018/11/15.
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '@containers/Home';
import DevTools from '@containers/DevTools';

export default function () {
    return (
        <div>
            <Router>
                <Route path="/" component={Home}>
                </Route>
            </Router>
            <DevTools />
        </div>
    );
};
