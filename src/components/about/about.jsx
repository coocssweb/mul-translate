import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class About extends Component {
    render () {
        return (
            <div>
                <h2>About</h2>
                <Redirect to="/somewhere/else" />
            </div>
        );
    }
};

export default About;
