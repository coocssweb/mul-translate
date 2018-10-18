import React, {Component} from 'react';
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import LanguageList from '../languageList';
import classNames from 'classnames';

class SelectBtn extends Component {
    constructor (props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    handleClickOutside () {
        this.state.open && this.onToggleOpen(false);
    }

    onToggleOpen () {
        this.setState((prevState, props) => ({
            open: !prevState.open
        }));
    }

    onSelect (value) {
        this.setState({
            open: false
        });
        this.props.onSetLanguage(value);
    }

    render () {
        return (
            <div className="selectBtnWrap">
                <a href="javascript:void(0);" className="selectBtn" onClick={this.onToggleOpen.bind(this)}>
                    <span className="selectBtn-inner">
                    <span className="selectBtn-value">{this.props.children}</span>
                        <i className={classNames({'selectBtn-icon': true, 'selectBtn-icon--up': this.state.open})}></i>
                    </span>
                </a>
                <LanguageList
                    open={this.state.open}
                    languageList={this.props.languageList}
                    languageOften={this.props.sourceOften}
                    language={this.props.language}
                    onSelect={this.onSelect.bind(this)}>
                </LanguageList>
            </div>
        );
    }
}

SelectBtn.propTypes = {
    languageList: PropTypes.array,
    languageOften: PropTypes.array,
    language: PropTypes.object

};

export default onClickOutside(SelectBtn);
