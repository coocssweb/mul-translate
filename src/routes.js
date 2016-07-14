import React from 'react';
import { Route, Router, Link, Redirect, IndexRoute } from 'react-router';
import Translation from './containers/Translation/index.js';
export default function getRoutes({ getState, dispatch }) {
    return (
        <Router>
            <Route path="/" component={Translation}>
            </Route>
        </Router>
    );
}
