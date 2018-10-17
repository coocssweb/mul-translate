import React, { Component } from 'react';
import PropTypes from 'prop-types';
class User extends Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }
    componentDidMount () {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }
    componentWillUnmount () {
        clearInterval(this.timerID);
    }
    tick () {
        this.setState({
            date: new Date()
        });
    }
    render () {
        // console.log('render');
        return (
            <div className="">
                用户名称：{ this.props.name }
                <div className="">
                    It is {this.state.date.toLocaleTimeString()}.
                </div>
            </div>
        );
    }
};

User.propTypes = {
    name: PropTypes.string.isRequired,
};

export default User;
