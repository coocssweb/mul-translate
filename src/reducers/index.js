import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';
import language from './language.js';
import wordInput from './wordInput.js';
import wordOutput from './wordOutput.js';
import acceptance from './acceptance.js';
import status from './status.js';

export default combineReducers({
    router,
    language,
    wordInput,
    wordOutput,
    acceptance,
    status
});
