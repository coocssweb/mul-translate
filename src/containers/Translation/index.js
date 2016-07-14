/**
 * Created by 王佳欣欣欣 on 2016/7/12.
 */
import Translation from '../../components/Translation/Main.js';
import { Provider, connect } from 'react-redux';
import { pushState } from 'redux-router';
import * as acceptanceAction from '../../actions/acceptance.js';
import * as languageAction from '../../actions/language.js';
import * as wordOutputAction from '../../actions/wordOutput.js';
import * as wordInputAction from '../../actions/wordInput.js';
import * as statusAction from '../../actions/status.js';

function mapStateToProps(state) {
    return {
        language_list: state.language.language_list,             //语言列表
        language_input: state.language.language_input,           //输入语言
        language_output: state.language.language_output,         //输出语言
        wordInput: state.wordInput.value,                        //翻译内容
        wordOutput: state.wordOutput.value,                      //翻译结果
        acceptance: state.acceptance.value,                      //采纳的翻译
        currentEdit: state.status.current_edit,                  //当前正在编辑的面板
        currentShowType: state.status.current_show_type,          //当前展示的形式
        currentDisplay: state.status.current_display            //当前展示的版面
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getLanguageList: () => dispatch(languageAction.getLanguageList()),                   //获取语言列表
        getAcceptance: (value) => dispatch(acceptanceAction.getAcceptance(value)),            //获取采纳的翻译
        getWordOutput: (value) => dispatch(wordOutputAction.getWordOutput(value)),           //获取翻译结果
        setWordOutput: (value) => dispatch(wordOutputAction.setWordOutput(value)),           //设置翻译结果
        clearWordOutput:() => dispatch(wordOutputAction.clearWordOutput()),           //获取翻译结果
        setLanguageInput: (value) => dispatch(languageAction.setLanguageInput(value)),        //设置输入语言
        setLanguageOutput: (value) => dispatch(languageAction.setLanguageOutput(value)),      //设置输入结果
        setWordInput: (value) => dispatch(wordInputAction.setWordInput(value)),               //设置翻译内容
        setAcceptance: (value) => dispatch(acceptanceAction.setAcceptance(value)),             //设置采纳
        updateAcceptance: (value) => dispatch(acceptanceAction.updateAcceptance(value)),             //设置采纳
        clearAcceptance: () => dispatch(acceptanceAction.clearAcceptance()),             //清除采纳信息
        setCurrentEdit: (value) => dispatch(statusAction.setCurrentEdit(value)),            //设置当前编辑框
        setCurrentShowType: (value) => dispatch(statusAction.setCurrentShowType(value)),            //设置当前编辑框
        setCurrentDisplay: (value) => dispatch(statusAction.setCurrentDisplay(value))       //设置当前展示的面板
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Translation);