/**
 * Created by 王佳欣欣欣 on 2016/7/14.
 * 采纳内容 action
 */

import { ASSEMBLED_REQUESTS, LINK_REQUESTS_MODE, SINGLE_REQUEST_MODE, ZIP_INDETERMINATE_REQUESTS_MODE } from '../middleWare/assembledApiRequester.js'
import AcceptanceService from '../services/acceptanceService.js';

export const GET_ACCEPTANCE_SUCCESS = 'GET_ACCEPTANCE_SUCCESS';
export const UPDATE_ACCEPTANCE_SUCCESS = 'UPDATE_ACCEPTANCE_SUCCESS';
export const SET_ACCEPTANCE_SUCCESS = 'SET_ACCEPTANCE_SUCCESS';


/**
 * 获取采纳数据
 * @param value
 */
export function getAcceptance(value) {
    return {
        [ASSEMBLED_REQUESTS]: {
            assembleMode: LINK_REQUESTS_MODE,
            requests: [{
                assembleMode: SINGLE_REQUEST_MODE,
                actionTypes: [null, GET_ACCEPTANCE_SUCCESS, null],
                service: ()=> AcceptanceService.getAcceptance(value)
            }]
        }
    }
}

/**
 * 设置采纳数据
 * @param value
 */
export function updateAcceptance(value) {
    //return {
    //    [ASSEMBLED_REQUESTS]: {
    //        assembleMode: LINK_REQUESTS_MODE,
    //        requests: [{
    //            assembleMode: SINGLE_REQUEST_MODE,
    //            actionTypes: [null, UPDATE_ACCEPTANCE_SUCCESS, null],
    //            service: ()=> AcceptanceService.setAcceptance(value)
    //        }]
    //    }
    //}
    return {
        type: 'UPDATE_ACCEPTANCE_SUCCESS',
        response: value
    }
}

export function setAcceptance(value){
    return {
        type: 'SET_ACCEPTANCE_SUCCESS',
        response: value
    }
}