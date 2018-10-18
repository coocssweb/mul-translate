/**
 * Created by zj-db0666 on 2018/10/10.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectBtn from '../selectBtn';
import className from 'classnames';

class Toolbar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            sourceLanguage: {
                id: 'zh',
                name: '中文'
            },
            aimLanguage: {
                id: 'en',
                name: '英文'
            },
            exchangeTimes: 0
        };
    }

    onSetLanguage (key, value) {
        this.setState({
            [key]: value
        });
    }

    onTranslate () {
        this.props.onTranslate(this.state.sourceLanguage, this.state.aimLanguage);
    }

    onExchange () {
        this.setState((prevState, props) => ({
            sourceLanguage: prevState.aimLanguage,
            aimLanguage: prevState.sourceLanguage,
            exchangeTimes: prevState.exchangeTimes + 1
        }));
    }

    render () {
        return (
            <div className="toolbar clearfix">
                <SelectBtn
                    languageList={this.props.languageList}
                    sourceOften={this.props.sourceOften}
                    language={this.state.sourceLanguage}
                    onSetLanguage={this.onSetLanguage.bind(this, 'sourceLanguage')}>
                    检测到{this.state.sourceLanguage.name}
                </SelectBtn>

                <a className={className({'exchange-btn': true, toggle: this.state.exchangeTimes % 2})} href="javascript:void(0);" onClick={this.onExchange.bind(this)}>
                    <span className="exchange-icon" ></span>
                </a>

                <SelectBtn
                    languageList={this.props.languageList}
                    sourceOften={this.props.aimOften}
                    language={this.state.aimLanguage}
                    onSetLanguage={this.onSetLanguage.bind(this, 'aimLanguage')}>
                    {this.state.aimLanguage.name}
                </SelectBtn>

                <a href="javascript:void(0);" className="translate-btn" onClick={this.onTranslate.bind(this)}></a>
            </div>
        );
    }
}

Toolbar.propTypes = {
    languageList: PropTypes.array,
    sourceOften: PropTypes.array,
    aimOften: PropTypes.array,
    onTranslate: PropTypes.func
};

export default Toolbar;
