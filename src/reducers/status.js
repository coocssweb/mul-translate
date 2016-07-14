/**
 * Created by 王佳欣 on 2016/7/14.
 * 一些状态控制
 */

import { SET_CURRENT_EDIT_SUCCESS,SET_CURRENT_SHOW_TYPE_SUCCESS,SET_CURRENT_DISPLAY_SUCCESS } from '../actions/status.js'

const initState = {
    current_edit: '',           //当前正在编辑的面板
    current_display: 'baidu',   //当前展示的面板
    current_show_type: 'tab'    //当前展示的形式
};

function language(state = initState, action) {
    switch (action.type) {
        case SET_CURRENT_EDIT_SUCCESS:
            return Object.assign({}, state, {
                current_edit: action.response
            });
        case SET_CURRENT_SHOW_TYPE_SUCCESS:
            return Object.assign({}, state, {
                current_show_type: action.response
            });
        case SET_CURRENT_DISPLAY_SUCCESS:
            return Object.assign({}, state, {
                current_display: action.response
            });
        default:
            return state;
    }
}

export default language;
