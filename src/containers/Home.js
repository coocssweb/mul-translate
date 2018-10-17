/**
 * Created by 王佳欣欣欣 on 2016/7/12.
 */
import Home from '../pages/home';
import { connect } from 'react-redux';
import * as languageAction from '../actions/languages.js';

function mapStateToProps (state) {
    return {...state.languages};
}

function mapDispatchToProps (dispatch) {
    return {
        getLanguages: () => dispatch(languageAction.getLanguages()),                // 获取语言列表
        translate: (data) => dispatch(languageAction.translate(data)),              // 翻译
        clearResult: () => dispatch(languageAction.clearResult()),                  // 清除翻译结果
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
