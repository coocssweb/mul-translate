/**
 * Created by 王佳欣欣欣 on 2016/7/14.
 * 输入内容 action
 */

import { ASSEMBLED_REQUESTS, LINK_REQUESTS_MODE, SINGLE_REQUEST_MODE, ZIP_INDETERMINATE_REQUESTS_MODE } from '../middleWare/assembledApiRequester.js'

export const SET_WORD_INPUT_SUCCESS = 'SET_WORD_INPUT_SUCCESS';

/**
 * 设置-输入内容
 * @param value
 */
export function setWordInput(value) {
    return {
        type: 'SET_WORD_INPUT_SUCCESS',
        response: value
    }
}
