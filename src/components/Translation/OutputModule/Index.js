/**
 * Created by 王佳欣欣欣 on 2016/7/12.
 * 功能描述：输出模块
 */

import React from 'react';
import OutputBox from './OutputBox.js';
import ToggleButton from '../../common/ToggleButton/Index.js';
import Style from './index.scss';

var Index = React.createClass({
    propTypes: {
        result: React.PropTypes.object
    },
    onSelectTab(value){
        if(this.props.currentDisplay == value){
            return;
        }
        this.setState({
            show: value
        })
        this.props.setCurrentEdit('');
        this.props.setCurrentDisplay(value);
    },
    onToggle(value){
        this.props.setCurrentEdit('');
        var type = this.props.currentShowType=="tab"?'list':'tab';
        this.props.setCurrentShowType(type);
    },
    onConfirmCb(key,value){
        var newObj = Object.assign({}, this.props.result);
        newObj[key] = value;
        this.props.setWordOutput(newObj);
    },
    render(){
        return (
            <div className="output-module">
                <div className="output-tabs">
                    <a href="javascript:;" className={
                        (this.props.currentDisplay=="baidu"?"output-tab_item_current":"output-tab_item")+(this.props.currentShowType=="list"?" hidden":"")
                        } onClick={this.onSelectTab.bind(this,"baidu")}>
                        <i className="output-tab_icon icon-baidu"/>百度翻译
                    </a>
                    <a href="javascript:;" className={
                        (this.props.currentDisplay=="youdao"?"output-tab_item_current":"output-tab_item")+(this.props.currentShowType=="list"?" hidden":"")
                        } onClick={this.onSelectTab.bind(this,"youdao")}>
                        <i className="output-tab_icon icon-youdao"/>有道翻译
                    </a>
                    <a href="javascript:;" className={
                        (this.props.currentDisplay=="google"?"output-tab_item_current":"output-tab_item")+(this.props.currentShowType=="list"?" hidden":"")
                        }
                       onClick={this.onSelectTab.bind(this,"google")}>
                        <i className="output-tab_icon icon-google"/>谷歌翻译
                    </a>
                    <a href="javascript:;" className={
                        (this.props.currentDisplay=="bing"?"output-tab_item_current":"output-tab_item")+(this.props.currentShowType=="list"?" hidden":"")
                        } onClick={this.onSelectTab.bind(this,"bing")}>
                        <i className="output-tab_icon icon-bing"/>必应翻译
                    </a>
                    <div className="toggle-box">
                        <span className="toggle_label">展开翻译结果：</span>
                        <ToggleButton isOn={this.props.currentShowType=="list"} callback={this.onToggle} />
                    </div>
                </div>

                <OutputBox isShow={this.props.currentDisplay=="baidu"}
                           setCurrentEdit={this.props.setCurrentEdit}
                           name="baidu"
                           title="百度翻译"
                           isEdit={this.props.currentEdit=="baidu"}
                           type={this.props.currentShowType}
                           onConfirmCb={this.onConfirmCb}
                           updateAcceptance={this.props.updateAcceptance}
                           value={this.props.result.baidu} />
                <OutputBox isShow={this.props.currentDisplay=="youdao"}
                           setCurrentEdit={this.props.setCurrentEdit}
                           name="youdao"
                           title="有道翻译"
                           isEdit={this.props.currentEdit=="youdao"}
                           type={this.props.currentShowType}
                           onConfirmCb={this.onConfirmCb}
                           updateAcceptance={this.props.updateAcceptance}
                           value={this.props.result.youdao}/>
                <OutputBox isShow={this.props.currentDisplay=="google"}
                           setCurrentEdit={this.props.setCurrentEdit}
                           name="google"
                           title="谷歌翻译"
                           isEdit={this.props.currentEdit=="google"}
                           type={this.props.currentShowType}
                           onConfirmCb={this.onConfirmCb}
                           updateAcceptance={this.props.updateAcceptance}
                           value={this.props.result.google}/>
                <OutputBox isShow={this.props.currentDisplay=="bing"}
                           setCurrentEdit={this.props.setCurrentEdit}
                           name="bing"
                           title="必应翻译"
                           isEdit={this.props.currentEdit=="bing"}
                           type={this.props.currentShowType}
                           onConfirmCb={this.onConfirmCb}
                           updateAcceptance={this.props.updateAcceptance}
                           value={this.props.result.bing}/>

            </div>
        )
    }
});

module.exports = Index;