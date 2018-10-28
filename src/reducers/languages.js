/**
 * 语种 reducer
 * Created by zj-db0666 on 2018/10/9.
 */
import Immutable from 'immutable';

import {
    SET_SOURCE_LANGUAGE,
    SET_AIM_LANGUAGE,
    LOAD_LANGUAGES_REQUEST,
    LOAD_LANGUAGES_SUCCESS,
    LOAD_LANGUAGES_FAILURE,
    TRANSLATE_SUCCESS,
    CLEAR_RESULT
} from '../constants/actionTypes';

const initialState = Immutable.fromJS({
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
});

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LANGUAGES_REQUEST:
            return state.set('loading', true);

        case LOAD_LANGUAGES_FAILURE:
            return state.set('error', true);

        case LOAD_LANGUAGES_SUCCESS:
            let result = action.result;
            return state.merge({
                languageList: result.list,
                sourceOften: result.sourceOften,
                aimOften: result.aimOften,
                loading: false,
            });

        case SET_SOURCE_LANGUAGE:
            return state.set('languageSource', action.response);

        case SET_AIM_LANGUAGE:
            return state.set('languageAim', action.response);

        case TRANSLATE_SUCCESS:
            return state.set('output', action.result);

        case CLEAR_RESULT:
            return state.set('output', {
                source: '',
                target: ''
            });

        default:
            return state;
    }
};
