/**
 * Created by zj-db0666 on 2018/10/9.
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./createStore.prod');
} else {
    module.exports = require('./createStore.dev');
}
