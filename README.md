# mul-translate
基于React/Redux 的一个现实直接调用多引擎API翻译结果（API）

## 目录结构
```bash
    ├──build/                       * webpack配置
    ├──config/                      * 环境配置文件
    ├──src/                         * 主代码
    ├──├──actions/                  * redux-action
    ├──├──api/                      * 所有api
    ├──├──assets/                   * 静态资源目录
    ├──├──components/               * 基础组件
    ├──├──constants/                * actionType常量文件
    ├──├──middleware/               * redux中间件文件
    ├──├──containers/               * redux-containers 逻辑组件
    ├──├──pages/                    * 业务组件
    ├──├──reducers/                 * redux-reducer
    ├──├──store/                    * redux-store
    ├──├──utils/                    * 工具文件
    ├──├──app.js                    * app主文件
    ├──index.html                   * app模板文件
```

## 功能说明
主要仿百度翻译，接口由于百度有做跨域处理

# CSS开发
命名规范采用B.E.M

# 调试
> npm start<br />
> 访问 http://localhost:8089

# 发布
> npm run build<br/>
>然后将dist目录下的内容发布即可。