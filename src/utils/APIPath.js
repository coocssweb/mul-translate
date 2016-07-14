/**
 * 定义前端使用的API接口路径
 */
const config = window.config;

let API = {
    GET_ACCEPTANCE: '/acceptance',
    GET_LANGUAGE_LIST: '/language_list',
    GET_WORD_OUTPUT: '/word_output'
};

let host = config["host"];
for (let key in API) {
    if (API.hasOwnProperty(key)) {
        API[key] = `${host}/v0.1/${API[key]}`;
    }
}

export default API;
