/**
 * Created by 王佳欣欣欣 on 2016/7/13.
 */

import React from 'react';

var OutputBox = React.createClass({
    propTypes: {
        value: React.PropTypes.string,
        isShow: React.PropTypes.bool,
        title: React.PropTypes.string
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
    getInitialState(){
        return {
            value : ""
        }
    },
    onEdit(){
        this.props.setCurrentEdit(this.props.name);
    },
    onCancel(){
        this.props.setCurrentEdit('');
    },
    onConfirm(){
        if($.trim(this.state.value)==""){
            return;
        }
        this.props.setCurrentEdit('');
        //修改翻译
        this.props.onConfirmCb(this.props.name,this.state.value)
    },
    onAccept(){
        this.props.updateAcceptance(this.props.value);
    },
    onTextChange(e){
        this.setState({
            value: e.target.value
        })
    },
    render(){

        var classNameRead = "output-read " + ( this.props.isEdit ? "output-read_hidden" : "" );
        var classNameEdit = "output-edit " + ( !this.props.isEdit ? "output-edit_hidden" : "");

        var classNameBox="output-box";
        if(!this.props.isShow&&this.props.type!="list"){
            classNameBox += " hidden";
        }
        if(this.props.type=="list"){
            classNameBox += " output-box-list";
        }


        return (
            <div className={classNameBox}>
                <div className={"label-title "+(this.props.type!="list"?"hidden":"")}>{this.props.title}</div>
                <div className={classNameRead}>
                    {this.props.value}
                    <a href="javascript:;" className={"btn-out_accept "+((this.state.value==""||this.state.value===undefined)?'hidden':'')}
                       onClick={this.onAccept}>
                        <i className="icon-done"/>
                        <span className="tip">采纳结果</span>
                    </a>
                    <a href="javascript:;" className={"btn-output_edit "+((this.state.value==""||this.state.value===undefined)?'hidden':'')}
                       onClick={this.onEdit}>
                        <i className="icon-edit"/>
                        <span className="tip">编辑结果</span>
                    </a>
                </div>
                <div className={classNameEdit}>
                    <textarea className="output_textarea" value={this.state.value} onChange={this.onTextChange}></textarea>
                    <div className="output-toolbar">
                        <a href="javascript:;" className="btn-confirm" onClick={this.onConfirm}>确定</a>
                        <a href="javascript:;" className="btn-cancel" onClick={this.onCancel}>取消</a>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = OutputBox;
