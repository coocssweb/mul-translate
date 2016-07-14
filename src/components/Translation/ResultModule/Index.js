/**
 * Created by 王佳欣欣欣 on 2016/7/12.
 * 功能描述：采纳的答案
 */

import React from 'react';

var Index = React.createClass({
    propTypes:{
        value: React.PropTypes.string
    },
    getInitialState(){
        return {
            value: ""
        }
    },
    componentDidMount(){
        this.setState({
            value: this.props.value
        })
    },
    componentWillReceiveProps(nextProps){
        this.setState({
            value: nextProps.value
        })
    },
    onEdit(){
        this.props.setCurrentEdit('acceptance');
    },
    onConfirm(){
        if($.trim(this.state.value)==""){
            return;
        }
        this.props.updateAcceptance(this.state.value);
        this.props.setCurrentEdit('');
    },
    onCancel(){
        this.setState({
            value: this.props.value
        })
        this.props.setCurrentEdit('');
    },
    onChange(e){
        this.setState({
            value: e.target.value
        })
    },
    render(){
        var classNameRead = "result-read " + ( this.props.currentEdit=='acceptance' ? "result-read_hidden" : "" );
        var classNameEdit = "result-edit " + ( this.props.currentEdit!='acceptance' ? "result-edit_hidden" : "");

        return (
            <div className="result-module">
                <div className="result_label">
                    → 已采纳的翻译：
                </div>
                <div className="result-box">
                    <div className={classNameRead}>
                        <p className="result_word">{this.props.value}</p>
                        <a href="javascript:;"
                           className={"btn_result-edit "+((this.props.value==''||this.props.value===undefined)?'hidden':'')}
                           onClick={this.onEdit}>
                            <i className="result-edit_icon icon-edit"/>
                        </a>
                    </div>
                    <div className={classNameEdit}>
                        <textarea className="result_textarea" placeholder="请输入" value={this.state.value} onChange={this.onChange} />
                        <div className="edit-toolbar">
                            <a href="javascript:;" className="btn-confirm" onClick={this.onConfirm}>确定</a>
                            <a href="javascript:;" className="btn-cancel" onClick={this.onCancel}>取消</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Index;