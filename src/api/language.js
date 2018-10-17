/**
 * Created by zj-db0666 on 2018/10/9.
 */
import Base from './base';

class Language extends Base {
    getList () {
        // this.request({path: ''});
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    sourceOften: [
                        {id: 'en', name: '英语'},
                        {id: 'zh', name: '中文'},
                        {id: 'jp', name: '日语'}
                    ],
                    aimOften: [
                        {id: 'zh', name: '中文'},
                        {id: 'en', name: '英语'},
                        {id: 'it', name: '意大利语'}
                    ],
                    list: [
                        {id: 'en', name: '英语'},
                        {id: 'zh', name: '中文'},
                        {id: 'jp', name: '日语'},
                        {id: 'fra', name: '法语'},
                        {id: 'it', name: '意大利语'},
                        {id: 'spa', name: '西班牙语'},
                        {id: 'de', name: '德语'}
                    ]
                });
            }, 500);
        });
    }

    translate (data) {
        // 由于百度接口跨域所以
        // return this.request({path: '/api/baidu/translate', method: 'post', data});
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    source: '我爱你',
                    target: 'I love you!'
                });
            }, 500);
        });
    }
}

export default new Language();
