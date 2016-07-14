/**
 * Created by 王佳欣欣欣 on 2016/7/12.
 * 功能描述：输入模块
 */

import React from 'react';
import DropBox from '../../common/DropBox/Index.js';

var Index = React.createClass({
    propTypes:{
        language_list: React.PropTypes.array,
        language_input: React.PropTypes.object,
        language_output: React.PropTypes.object,
        value: React.PropTypes.string
    },
    onTextChange(e){
        this.props.setWordInput(e.target.value);
    },
    onClear(){
        this.props.setWordInput("");
        this.props.setAcceptance("");
        this.props.clearWordOutput();
        this.props.setCurrentEdit("");
    },
    onSelectLanguageInput(value){
        this.props.setLanguageInput(value);
    },
    onSelectLanguageOutput(value){
        this.props.setLanguageOutput(value);
    },
    onTranslate(e){
        if($.trim(this.props.value)==""){
            return;
        }

        //调用翻译方法
        this.props.getWordOutput(this.props.value);
        //获取已经采纳的翻译
        this.props.getAcceptance(this.props.value);

    },
    render(){
        return (
            <div className="input-module">
                <div className="input-toolbar">
                        <DropBox items={this.props.language_list}
                                 id="drop-box_input"
                                 default={this.props.language_input}
                                 callback={this.onSelectLanguageInput}
                            />
                        <i className="translate_icon icon-arrow" />
                        <DropBox items={this.props.language_list}
                                 id="drop-box_output"
                                 default={this.props.language_output}
                                 callback={this.onSelectLanguageOutput}
                            />
                    <a href="javascript:;" className="btn-translate" onClick={this.onTranslate}>翻 译</a>
                </div>
                <div className="input-box">
                    <textarea value={this.props.value} placeholder="请输入要翻译的文字" className="input_textarea" onChange={this.onTextChange} />
                    <a href="javascript:;" className={"btn-clear "+(this.props.value==''?'hidden':'')} onClick={this.onClear}><i className="icon-close"></i></a>
                </div>
            </div>
        )
    }
});

module.exports = Index;