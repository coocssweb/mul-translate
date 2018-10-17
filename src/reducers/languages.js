/**
 * 语种 reducer
 * Created by zj-db0666 on 2018/10/9.
 */

import {
    SET_SOURCE_LANGUAGE,
    SET_AIM_LANGUAGE,
    LOAD_LANGUAGES_REQUEST,
    LOAD_LANGUAGES_SUCCESS,
    LOAD_LANGUAGES_FAILURE,
    TRANSLATE_SUCCESS,
    CLEAR_RESULT
} from '../constants/actionTypes';

const initialState = {
    languageList: [],
    sourceOften: [],
    sourceList: [],
    aimList: [],
    aimOften: [],
    loading: true,
    error: false,
    output: {
        source: '',
        target: ''
    },
};

const language = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LANGUAGES_REQUEST:
            return Object.assign({}, state, {loading: true});

        case LOAD_LANGUAGES_FAILURE:
            return Object.assign({}, state, {error: true});

        case LOAD_LANGUAGES_SUCCESS:
            let result = action.result;
            return Object.assign({}, state,
                {
                    languageList: result.list,
                    sourceOften: result.sourceOften,
                    aimOften: result.aimOften,
                    loading: false,
                });

        case SET_SOURCE_LANGUAGE:
            return Object.assign({}, state, {
                languageSource: action.response
            });

        case SET_AIM_LANGUAGE:
            return Object.assign({}, state, {
                languageAim: action.response
            });

        case TRANSLATE_SUCCESS:
            return Object.assign({}, state, {
                output: action.result
            });

        case CLEAR_RESULT:
            return Object.assign({}, state, {
                output: {
                    source: '',
                    target: ''
                }
            });

        default:
            return Object.assign({}, state, {});
    }
};

export default language;
