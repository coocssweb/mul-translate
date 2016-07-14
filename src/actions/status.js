/**
 * Created by 王佳欣欣欣 on 2016/7/14.
 * 一些状态控制 action
 */


import { ASSEMBLED_REQUESTS, LINK_REQUESTS_MODE, SINGLE_REQUEST_MODE, ZIP_INDETERMINATE_REQUESTS_MODE } from '../middleWare/assembledApiRequester.js'

export const SET_CURRENT_EDIT_SUCCESS = 'SET_CURRENT_EDIT_SUCCESS';
export const SET_CURRENT_SHOW_TYPE_SUCCESS = 'SET_CURRENT_SHOW_TYPE_SUCCESS';
export const SET_CURRENT_DISPLAY_SUCCESS = 'SET_CURRENT_DISPLAY_SUCCESS';

/**
 * 设置-输入内容
 * @param value
 */
export function setCurrentEdit(value) {
    return {
        type: 'SET_CURRENT_EDIT_SUCCESS',
        response: value
    }
}


/**
 * 设置-当前展示的形式
 * @param value
 */
export function setCurrentShowType(value) {
    return {
        type: 'SET_CURRENT_SHOW_TYPE_SUCCESS',
        response: value
    }
}


/**
 * 设置-当前展示的形式
 * @param value
 */
export function setCurrentDisplay(value) {
    return {
        type: 'SET_CURRENT_DISPLAY_SUCCESS',
        response: value
    }
}