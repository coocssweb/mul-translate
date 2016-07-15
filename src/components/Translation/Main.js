/**
 * Created by 王佳欣欣欣 on 2016/7/12.
 * 功能描述：主体
 */
import React from 'react';
import Header from './Header.js';
import TranslationInput from './InputModule/Index.js';
import TranslationOutput from './OutputModule/Index.js';
import TranslationResult from './ResultModule/Index.js';
import Style from './main.scss';

var Main = React.createClass({
    componentDidMount(){
        this.props.getLanguageList();
    },
    componentWillReceiveProps(nextProps){

    },
    render(){
        return (
            <div>
                <Header />
                <div className="main">
                    <div className="main-left">
                        <TranslationInput {...this.props} />
                        <TranslationResult {...this.props}/>
                    </div>
                    <div className="main-right">
                        <TranslationOutput {...this.props} />
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Main;