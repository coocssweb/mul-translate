/**
 * Created by 王佳欣欣欣 on 2016/7/14.
 */

import APIPath from '../utils/APIPath';
import BaseService from './baseService';

class wordOutputService extends BaseService {

    /**
     * 获取翻译结果
     */
    getWordOutput(value) {
        //let url = APIPath.GET_WORD_OUTPUT+'?word='+value;
        let url = '/data/output.json';
        return this.get(url);
    }
}

export default new wordOutputService;
