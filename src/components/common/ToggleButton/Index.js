/**
 * Created by 王佳欣欣欣 on 2016/7/13.
 */

import React from 'react';
import Style from './index.scss'
var Index = React.createClass({
    propTypes:{
        isOn: React.PropTypes.bool,
        callback: React.PropTypes.func
    },
    onToggle(){
        if(typeof this.props.callback == "function"){
            this.props.callback()
        }
    },
    render(){
        return(
            <div className={"btn-toggle "+(this.props.isOn?"btn-toggle_on":"")}
                onClick={this.onToggle}>
               <span className="btn-toggle_icon"></span>
            </div>
        )
    }
})

module.exports = Index;