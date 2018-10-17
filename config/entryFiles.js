/**
 * Created by zj-db0666 on 2018/7/6.
 */
const {resolve} = require('../build/utils');
/*
{
    name: 'index',      // 入口文件目录，用于webpack中的name key
    path: '',           // 入口文件目录，用于获取js文件入口
    filename: '',       // 入口文件名称，用于定义构建后的文件名
    template: '',       // 入口文件模板，用户获取模板文件
}
*/

module.exports = [
    {
        name: 'index',
        path: resolve('src', 'index/index.js'),
        filename: 'index.html',
        template: resolve('src', 'index/index-render.js')
    },
    {
        name: 'cart',
        path: resolve('src', 'cart/index.js'),
        filename: 'cart.html',
        template: resolve('src', 'cart/index-render.js')
    },
    {
        name: 'buy_checkout',
        path: resolve('src', 'buy/checkout/index.js'),
        filename: 'buy/checkout.html',
        template: resolve('src', 'buy/checkout/index-render.js')
    },
    {
        name: 'list',
        path: resolve('src', 'list/index.js'),
        filename: 'list.html',
        template: resolve('src', 'list/index-render.js')
    },
    {
        name: 'detail',
        path: resolve('src', 'detail/index.js'),
        filename: 'detail.html',
        template: resolve('src', 'detail/index-render.js')
    },
    {
        name: 'aftersale',
        path: resolve('src', 'personal/aftersale/index.js'),
        filename: 'personal/aftersale.html',
        template: resolve('src', 'personal/aftersale/index-render.js')
    },
    {
        name: 'aftersale_detail',
        path: resolve('src', 'personal/aftersale/detail/index.js'),
        filename: 'personal/aftersale/detail.html',
        template: resolve('src', 'personal/aftersale/detail/index-render.js')
    },
    {
        name: 'aftersale_apply',
        path: resolve('src', 'personal/aftersale/apply/index.js'),
        filename: 'personal/aftersale/apply.html',
        template: resolve('src', 'personal/aftersale/apply/index-render.js')
    },
    {
        name: 'coupon',
        path: resolve('src', 'personal/coupon/index.js'),
        filename: 'personal/coupon.html',
        template: resolve('src', 'personal/coupon/index-render.js')
    },
    {
        name: 'delivery',
        path: resolve('src', 'personal/delivery/index.js'),
        filename: 'personal/delivery.html',
        template: resolve('src', 'personal/delivery/index-render.js')
    },
    {
        name: 'personal',
        path: resolve('src', 'personal/index.js'),
        filename: 'personal.html',
        template: resolve('src', 'personal/index-render.js')
    },
    {
        name: 'personal/order',
        path: resolve('src', 'personal/order/index.js'),
        filename: 'personal/order.html',
        template: resolve('src', 'personal/order/index-render.js')
    },
    {
        name: 'personal/order_detail',
        path: resolve('src', 'personal/order/detail/index.js'),
        filename: 'personal/order_detail.html',
        template: resolve('src', 'personal/order/detail/index-render.js')
    },
    {
        name: 'personal/comment',
        path: resolve('src', 'personal/comment/index.js'),
        filename: 'personal/comment.html',
        template: resolve('src', 'personal/comment/index-render.js')
    },
    {
        name: 'personal/services',
        path: resolve('src', 'personal/services/index.js'),
        filename: 'personal/services.html',
        template: resolve('src', 'personal/services/index-render.js')
    },
    {
        name: 'personal/help',
        path: resolve('src', 'personal/help/index.js'),
        filename: 'personal/help.html',
        template: resolve('src', 'personal/help/index-render.js')
    },
    {
        name: 'payment',
        path: resolve('src', 'buy/payment/index.js'),
        filename: 'buy/payment.html',
        template: resolve('src', 'buy/payment/index-render.js')
    },
    {
        name: 'buyResult',
        path: resolve('src', 'buy/result/index.js'),
        filename: 'buy/result.html',
        template: resolve('src', 'buy/result/index-render.js')
    },
    {
        name: '500',
        path: resolve('src', 'error/500.js'),
        filename: '../services/500.html',
        template: resolve('src', 'error/500-render.js')
    },
    {
        name: '5_500',
        path: resolve('src', 'error/500.js'),
        filename: 'error/500.html',
        template: resolve('src', 'error/500-render.js')
    },
    {
        name: '404',
        path: resolve('src', 'error/404.js'),
        filename: '../services/404.html',
        template: resolve('src', 'error/404-render.js')
    },
    {
        name: '4_404',
        path: resolve('src', 'error/404.js'),
        filename: 'error/404.html',
        template: resolve('src', 'error/404-render.js')
    },
    {
        name: 'auth',
        path: resolve('src', 'error/auth.js'),
        filename: 'error/auth.html',
        template: resolve('src', 'error/auth-render.js')
    },
    {
        name: 'notice',
        path: resolve('src', 'notice/index.js'),
        filename: 'notice.html',
        template: resolve('src', 'notice/index-render.js')
    }
];
