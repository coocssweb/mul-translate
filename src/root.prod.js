/**
 * Created by zj-db0666 on 2018/11/15.
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '@containers/Home';

export default function () {
    return (
        <Router>
            <Route path="/" component={Home}>
            </Route>
        </Router>
    );
};
