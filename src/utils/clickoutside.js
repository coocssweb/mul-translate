/**
 * 王佳欣
 * Created by zj-db0666 on 2018/10/17.
 */
export default {
    listener: null,
    addEventListener () {
        this.listener = function (e) {
            
        };
        document.addEventListener('click', this.listener);
    },

    removeEventListener () {
        document.removeEventListener('click', this.listener);
    }
}