/**
 * Created by 王佳欣欣欣 on 2016/7/14.
 */

import { SET_ACCEPTANCE_SUCCESS,GET_ACCEPTANCE_SUCCESS,CLEAR_ACCEPTANCE_SUCCESS,UPDATE_ACCEPTANCE_SUCCESS} from '../actions/acceptance.js'

const initState = {
    value: ''
};

function acceptance(state = initState, action) {
    switch (action.type) {
        case GET_ACCEPTANCE_SUCCESS:
            return Object.assign({}, state, {
                value: action.response.value
            });
        case SET_ACCEPTANCE_SUCCESS:
            return Object.assign({}, state, {
                value: action.response
            });
        case UPDATE_ACCEPTANCE_SUCCESS:
            return Object.assign({}, state, {
                value: action.response
            });
        default:
            return state;
    }
}

export default acceptance;