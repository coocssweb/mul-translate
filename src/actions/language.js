/**
 * Created by 王佳欣欣欣 on 2016/7/14.
 * 语言列表 action
 */

import { ASSEMBLED_REQUESTS, LINK_REQUESTS_MODE, SINGLE_REQUEST_MODE, ZIP_INDETERMINATE_REQUESTS_MODE } from '../middleWare/assembledApiRequester.js'
import LanguageService from '../services/languageService.js';

export const GET_LANGUAGE_SUCCESS = 'GET_LANGUAGE_SUCCESS';
export const SET_LANGUAGE_INPUT_SUCCESS = 'SET_LANGUAGE_INPUT_SUCCESS';
export const SET_LANGUAGE_OUTPUT_SUCCESS = 'SET_LANGUAGE_OUTPUT_SUCCESS';


/**
 * 获取语言列表
 */
export function getLanguageList() {
    return {
        [ASSEMBLED_REQUESTS]: {
            assembleMode: LINK_REQUESTS_MODE,
            requests: [{
                assembleMode: SINGLE_REQUEST_MODE,
                actionTypes: [null, GET_LANGUAGE_SUCCESS, null],
                service: ()=> LanguageService.getLanguageList()
            }]
        }
    }
}

/**
 * 设置-输入语言
 * @param value
 */
export function setLanguageInput(value) {
    return {
        type: 'SET_LANGUAGE_INPUT_SUCCESS',
        response: value
    }
}

/**
 * 设置-输出语言
 * @param value
 */
export function setLanguageOutput(value){
    return {
        type: 'SET_LANGUAGE_OUTPUT_SUCCESS',
        response: value
    }
}