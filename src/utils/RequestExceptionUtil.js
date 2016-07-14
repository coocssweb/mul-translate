class RequestExceptionUtil {

    /**
     * 获得错误信息
     * @param err 异常
     * @param defaultMsg   默认返回信息
     * @returns {*} 返回的信息
     */
    getError(err, defaultMsg) {
        try {
            return JSON.parse(err.responseText).message
        } catch (e) {
            if (typeof(err) === 'string') {
                return err
            }
            return defaultMsg;
        }
    }
}
export default new RequestExceptionUtil();