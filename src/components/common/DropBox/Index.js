/**
 * Created by 王佳欣欣欣 on 2016/7/13.
 */
import React from 'react';

var Index = React.createClass({
    propTypes:{
        items: React.PropTypes.array,
        default: React.PropTypes.object,
        id: React.PropTypes.string,
        callback: React.PropTypes.func
    },
    componentDidMount(){
        var _this = this;
        document.addEventListener('click',function(e){
            var length = $(e.target).parents('#'+_this.props.id).length;
            if(length==0){
                _this.setState({
                    isShow: false
                })
            }
        })
    },
    getInitialState(){
        return {
            isShow: false
        }
    },
    toggleShow(e){
        this.setState({
            isShow: !this.state.isShow
        })
    },
    onSelect(value){
        this.setState({
            isShow: false
        })
        if(typeof this.props.callback == 'function'){
            this.props.callback(value);
        }
    },
    render(){
        return (
            <div className="drop-box" id={this.props.id}>
                <a href="javascript:;" className="drop-box_button" onClick={this.toggleShow}>
                    {this.props.default.word}
                    <i className="drop-box_icon icon-down"></i>
                </a>
                <div className={"drop-list "+(this.state.isShow?"":"hidden")}>
                    {
                        this.props.items.map(function(item,index){
                           return (
                               <a href="javascript:;" key={item.key} className={this.props.default.key==item.key?"drop-item_active":"drop-item "}
                                  onClick={this.onSelect.bind(this,item)}>{item.word}</a>
                           )
                        },this)
                    }
                </div>
            </div>
        )
    }
})

module.exports = Index;
