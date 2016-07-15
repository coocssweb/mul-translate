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
                        <TranslationInput value={this.props.wordInput}
                                          language_list={this.props.language_list}
                                          language_input={this.props.language_input}
                                          language_output={this.props.language_output}
                                          setLanguageInput={this.props.setLanguageInput}
                                          setLanguageOutput={this.props.setLanguageOutput}
                                          setWordInput={this.props.setWordInput}
                                          getWordOutput={this.props.getWordOutput}
                                          getAcceptance={this.props.getAcceptance}
                                          setCurrentEdit={this.props.setCurrentEdit}
                                          setAcceptance={this.props.setAcceptance}
                                          clearWordOutput={this.props.clearWordOutput}
                            />
                        <TranslationResult value={this.props.acceptance}
                                           currentEdit={this.props.currentEdit}
                                           setCurrentEdit={this.props.setCurrentEdit}
                                           setAcceptance={this.props.setAcceptance}
                                           updateAcceptance={this.props.updateAcceptance}
                            />
                    </div>
                    <div className="main-right">
                        <TranslationOutput result={this.props.wordOutput}
                                           currentEdit={this.props.currentEdit}
                                           currentDisplay={this.props.currentDisplay}
                                           currentShowType={this.props.currentShowType}
                                           setCurrentDisplay={this.props.setCurrentDisplay}
                                           setCurrentShowType={this.props.setCurrentShowType}
                                           setCurrentEdit={this.props.setCurrentEdit}
                                           setWordOutput={this.props.setWordOutput}
                                           updateAcceptance={this.props.updateAcceptance}
                            />
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Main;