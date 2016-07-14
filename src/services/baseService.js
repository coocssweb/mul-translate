/**
 * 基础的Base类
 */
import fetch from 'isomorphic-fetch';

export default class {

    /**
     * 请求处理
     * @param apiUrl url地址
     * @param body 请求数据
     * @param method 方法
     * @returns {Promise.<T>}
     */
    request(apiUrl, body, method = "GET") {
        const _method = method.toUpperCase();
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
        };

        let settings = {
            method: _method,
            //mode: 'no-cors',
            headers: headers
        };
        if (!['get', 'head'].includes(_method) && body) {
            settings['body'] = body;
        }
        return fetch(apiUrl, settings).then(response => {
            if (response.status == 401) {
                delete localStorage.user;
                delete localStorage.token;
                delete localStorage.mac_key;
                delete localStorage.expires_at;
                throw new Error('401 Unauthorized');
            }
            return response.json().then(json => ({json, response}))
        }).then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        });
    }


    /**
     * GET请求
     * @param url URL地址
     * @returns {Object} 远程请求结果
     */
    get(url) {
        return this.request(url, null, "GET");
    }

    /**
     * POST请求
     * @param url URL地址
     * @param data 请求数据
     * @returns {Object} 远程请求结果
     */
    post(url, data) {
        return this.request(url, data, "POST");
    }

    /**
     * PUT请求
     * @param url URL地址
     * @param data 请求数据
     * @returns {Object} 远程请求结果
     */
    put(url, data) {
        return this.request(url, data, "PUT");
    }

    /**
     * DELETE请求
     * @param url URL地址
     * @param data 请求数据
     * @returns {Object} 远程请求结果
     */
    delete(url, data) {
        return this.request(url, data, "DELETE");
    }


}

