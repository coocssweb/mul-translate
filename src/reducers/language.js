/**
 * Created by 王佳欣欣欣欣 on 2016/7/14.
 * 语言列表处理
 */

import { GET_LANGUAGE_SUCCESS,SET_LANGUAGE_INPUT_SUCCESS,SET_LANGUAGE_OUTPUT_SUCCESS } from '../actions/language.js'

const initState = {
    language_list: [],
    language_input: {},
    language_output: {}
};

function language(state = initState, action) {
    switch (action.type) {
        case GET_LANGUAGE_SUCCESS:
            return Object.assign({}, state, {
                language_list: action.response.language_list,
                language_input: action.response.language_input,
                language_output: action.response.language_output
            });
        case SET_LANGUAGE_INPUT_SUCCESS:
            return Object.assign({}, state, {
                language_input: action.response
            });
        case SET_LANGUAGE_OUTPUT_SUCCESS:
            return Object.assign({}, state, {
                language_output: action.response
            });
        default:
            return state;
    }
}

export default language;