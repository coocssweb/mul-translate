/**
 * Created by zj-db0666 on 2018/10/9.
 */
import {
    LOAD_LANGUAGES_REQUEST,
    LOAD_LANGUAGES_SUCCESS,
    LOAD_LANGUAGES_FAILURE,
    TRANSLATE_REQUEST,
    TRANSLATE_SUCCESS,
    TRANSLATE_FAILURE,
    CLEAR_RESULT
} from '../constants/actionTypes';

import languageApi from '../api/language';

// 加载语种列表
export const getLanguages = () => {
    return {
        types: [LOAD_LANGUAGES_REQUEST, LOAD_LANGUAGES_SUCCESS, LOAD_LANGUAGES_FAILURE],
        promise: () => {
            return languageApi.getList();
        }
    };
};

// 翻译
export const translate = ({from, to, query}) => {
    return {
        types: [TRANSLATE_REQUEST, TRANSLATE_SUCCESS, TRANSLATE_FAILURE],
        promise: () => {
            return languageApi.translate({from, to, query});
        }
    };
};

// 清除翻译结果
export const clearResult = () => {
    return {
        type: CLEAR_RESULT
    }
}
