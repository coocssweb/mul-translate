/**
 * 王佳欣
 * Created by zj-db0666 on 2018/10/9.
 */

import 'whatwg-fetch';

const API_DOMAIN = 'http://localmall.meitu.com';

class Base {
    request ({path, data = {}, method = 'GET', requireLogin}) {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        let settings = {
            method,
            headers,
            body: JSON.stringify(data),
            mode: 'cors'
        };

        let apiUrl = `${API_DOMAIN}${path}`;

        return new Promise((resolve, reject) => {
            fetch(apiUrl, settings).then(response => {
                return response.json();
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

export default Base;
