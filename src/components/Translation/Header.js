/**
 * Created by 王佳欣欣欣 on 2016/7/12.
 * 功能描述：头部
 */
import React from 'react';
import Styles from './header.scss';
var Header = React.createClass({
    render(){
        return (
            <div className="header">
                <div className="header-inner">
                    <a href="javascript:;" className="header-logo">翻译工具</a>
                </div>
            </div>
        )
    }
});

module.exports = Header;
