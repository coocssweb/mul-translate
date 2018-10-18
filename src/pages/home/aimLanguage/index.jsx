import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import SelectBtn from '../selectBtn';
import LanguageList from '../languageList';

class AimLanguage extends Component {
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
            <div className="aimLanguage">
                <SelectBtn open={this.state.open}
                           toggleOpen={this.onToggleOpen.bind(this)}>
                    {this.props.language.name}
                </SelectBtn>

                <LanguageList
                    open={this.state.open}
                    languageList={this.props.languageList}
                    languageOften={this.props.aimOften}
                    language={this.props.language}
                    onSelect={this.onSelect.bind(this)}>
                </LanguageList>
            </div>
        );
    }
}

AimLanguage.propTypes = {
    languageList: PropTypes.array,
    aimOften: PropTypes.array,
    language: PropTypes.object,
    onSetLanguage: PropTypes.func,
};

export default onClickOutside(AimLanguage);
