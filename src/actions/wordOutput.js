/**
 * Created by 王佳欣欣欣 on 2016/7/14.
 * 翻译结果 action
 */

import { ASSEMBLED_REQUESTS, LINK_REQUESTS_MODE, SINGLE_REQUEST_MODE, ZIP_INDETERMINATE_REQUESTS_MODE } from '../middleWare/assembledApiRequester.js'
import WordOutputService from '../services/wordOutputService.js';

export const GET_WORD_OUTPUT_SUCCESS = 'GET_WORD_OUTPUT_SUCCESS';
export const CLEAR_WORD_OUTPUT_SUCCESS = 'CLEAR_WORD_OUTPUT_SUCCESS';
export const SET_WORD_OUTPUT_SUCCESS = 'SET_WORD_OUTPUT_SUCCESS';


/**
 * 获取翻译结果
 */
export function getWordOutput(value) {
    return {
        [ASSEMBLED_REQUESTS]: {
            assembleMode: LINK_REQUESTS_MODE,
            requests: [{
                assembleMode: SINGLE_REQUEST_MODE,
                actionTypes: [null, GET_WORD_OUTPUT_SUCCESS, null],
                service: (value)=> WordOutputService.getWordOutput(value)
            }]
        }
    }
}

export function setWordOutput(value){
    return {
        type: 'SET_WORD_OUTPUT_SUCCESS',
        response: value
    }
}

export function clearWordOutput(){
    return {
        type: 'CLEAR_WORD_OUTPUT_SUCCESS',
        response: {}
    }
}