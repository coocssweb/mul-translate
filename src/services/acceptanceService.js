/**
 * Created by 王佳欣欣欣 on 2016/7/14.
 */


import APIPath from '../utils/APIPath';
import BaseService from './baseService';

class acceptanceService extends BaseService {

    /**
     * 获取采纳的翻译
     */
    getAcceptance(value) {
        //let url = APIPath.GET_ACCEPTANCE+'?word=' + value;
        let url = '/data/acceptance.json';
        return this.get(url);
    }
}

export default new acceptanceService;