/**
 * Created by 王佳欣欣欣 on 2016/7/14.
 * 翻译结果
 */

import { GET_WORD_OUTPUT_SUCCESS, CLEAR_WORD_OUTPUT_SUCCESS,SET_WORD_OUTPUT_SUCCESS} from '../actions/wordOutput.js'

const initState = {
    value: {}
};

function wordOutput(state = initState, action) {
    switch (action.type) {
        case GET_WORD_OUTPUT_SUCCESS:
        case CLEAR_WORD_OUTPUT_SUCCESS:
        case SET_WORD_OUTPUT_SUCCESS:
            return Object.assign({}, state, {
                value: action.response
            });
        default:
            return state;
    }
}

export default wordOutput;
