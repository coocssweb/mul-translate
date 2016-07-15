/**
 * Created by 王佳欣欣欣 on 2016/7/15.
 * 封装一些常用方法
 */

(function(){

    var root = this;

    var xxx = function(obj) {
        if (obj instanceof xxx) {
            return obj;
        }

        if (!(this instanceof xxx)) {
            return new xxx(obj);
        }
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = xxx;
        }
        exports.xxx = xxx;
    } else {
        root.xxx = xxx;
    }

    xxx.trim = function(value){
        if(typeof value == 'string'){
            return value.replace(/(^\s*)|(\s*$)/g,'')
        }else{
            return ""
        }
    }

}.call(this));
