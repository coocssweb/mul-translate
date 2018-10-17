import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import SelectBtn from '../selectBtn';
import LanguageList from '../languageList';

class SourceLanguage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleClickOutside () {
        this.props.open && this.props.toggleOpen(false);
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
            <div className="sourceLanguage">
                <SelectBtn open={this.state.open}
                           toggleOpen={this.onToggleOpen.bind(this)}>
                    检测到{this.props.language.name}
                </SelectBtn>

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

SourceLanguage.propTypes = {
    languageList: PropTypes.array,
    sourceOften: PropTypes.array,
    language: PropTypes.object,
    onSetLanguage: PropTypes.func,
};

export default onClickOutside(SourceLanguage);
