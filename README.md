# mul-translate
基于React/Redux 的一个现实直接调用多引擎API翻译结果（API）

### src
代码目录
1. actions ：action处理
2. components : 组件
3. containers : 容器
4. middleWare : 中间键
5. reducers : reducer目录
6. api : api层

# 主体逻辑
用Redux很重要的一点是，规划【reducer树】，这是重中之重<br/>
本实例的基本上行所有的状态都存放在reducer（状态，当前编辑框等等）<br/>
当然通用组件（toggleSwitch、DropDown）的状态还是保留在state内<br/>
大部分状态放在reducer的好处是，单一数据源化，很容易分析什么哪个状态影响了前端的渲染，同时很容易通多调用action修改reducer来控制前端的渲染。

# CSS开发
命名规范采用B.E.M

# 调试
> npm start<br />
> 访问 http://localhost:8089

# 发布
> npm run build<br/>
>然后将dist目录下的内容发布即可。