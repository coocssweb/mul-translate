/**
 * Created by zj-db0666 on 2018/10/9.
 */

export default () => {
    return (next) => (action) => {
        const { promise, types, ...rest } = action;

        if (!promise) {
            return next(action);
        }

        const [REQUEST, SUCCESS, FAILURE] = types;

        next({...rest, type: REQUEST});

        return promise().then(
            (result) => {
                next({...rest, result, type: SUCCESS});
            },
            (error) => {
                next({...rest, error, type: FAILURE});
            }
        );
    };
};
