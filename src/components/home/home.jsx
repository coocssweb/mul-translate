import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link, Route} from 'react-router-dom';
import About from '@components/about/about';
import Topics from '@components/topics/topics';
import User from './user/user';

class Home extends Component {
    componentDidMount () {
        this.props.getLanguages();
    }

    render () {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/test">Test</Link>
                    </li>
                    <li>
                        <Link to="/topics/10">Topics</Link>
                    </li>
                </ul>
                <User name="王佳欣" />
                <Route path="/about" component={About}>
                </Route>
                <Route path="/test" render={() => {
                    console.log(this.props);
                    return (<div>Test</div>);
                }}>
                </Route>
                <Route exact path="/topics/:id" component={Topics}>
                </Route>
                <Route exact path="/topics" component={Topics}>
                </Route>
            </div>
        );
    }
}

Home.propTypes = {
    languageList: PropTypes.array,
};

export default Home;
