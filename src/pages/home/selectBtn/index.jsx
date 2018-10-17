import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SelectBtn extends Component {

    render () {
        return (
            <a href="javascript:void(0);" className="selectBtn" onClick={this.props.toggleOpen.bind(this, !this.props.open)}>
                <span className="selectBtn-inner">
                <span className="selectBtn-value">{this.props.children}</span>
                    <i className={classNames({'selectBtn-icon': true, 'selectBtn-icon--up': this.props.open})}></i>
                </span>
            </a>
        );
    }
}

SelectBtn.propTypes = {
    language: PropTypes.object,
    open: PropTypes.bool,
    toggleOpen: PropTypes.func
};

export default SelectBtn;
