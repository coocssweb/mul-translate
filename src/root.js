/**
 * Created by zj-db0666 on 2018/11/15.
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./root.prod');
} else {
    module.exports = require('./root.dev');
}
