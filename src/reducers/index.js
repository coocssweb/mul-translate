/**
 * Created by zj-db0666 on 2018/10/9.
 */
// import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux-immutablejs';
import languages from './languages';

export default combineReducers({
    // router,
    languages
});
