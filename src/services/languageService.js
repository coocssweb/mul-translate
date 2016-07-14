/**
 * Created by 王佳欣欣欣 on 2016/7/14.
 */

import APIPath from '../utils/APIPath';
import BaseService from './baseService';

class languageService extends BaseService {

    /**
     * 获取语言列表
     */
    getLanguageList() {
        //let url = APIPath.GET_LANGUAGE_LIST;
        let url = "/data/language_list.json";
        return this.get(url);
    }
}

export default new languageService;