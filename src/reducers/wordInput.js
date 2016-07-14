/**
 * Created by 王佳欣欣欣欣 on 2016/7/14.
 * 输入内容设置
 */

import { SET_WORD_INPUT_SUCCESS} from '../actions/wordInput.js'

const initState = {
    value: ''
};

function wordInput(state = initState, action) {
    switch (action.type) {
        case SET_WORD_INPUT_SUCCESS:
            return Object.assign({}, state, {
                value: action.response
            });
        default:
            return state;
    }
}

export default wordInput;