# react 高阶组件

##　概念

高阶组件(HOC): height order component
> 1: 复用组件,不是api
> 2: 组合设计模式. (es6中class类的原理是什么?)


> 一个函数的形参是另一个组件且return 为一个全新的组件

定义:
> 1:高阶组件是一个函数,独立的函数
> 2:入参:是一个业务组件
> 3:输入: 全新组件

## 语法

js
- 普通写法
- 组合写法

ts 
- 普通写法
- 装饰器
- 多个组合写法

### 高阶组件作用

- 属性代理

- 劫持




需求：
    将首页中的商品列表，用redux管理

- 1：在store上新建状态
>谁能新建状态 ？ 有且仅有reducer函数
- 2：新建reducer函数
- 3：新建行为
> 分析有哪些行为，同步的 (返回对象)还是异步的(返回函数)
> 因为有几个行为就有几个action函数，同步输出 type数组    异步 输出函数
- 4：组件中使用redux，代替组件内部私有状态，目的为了实现数据共享

## 要完成需求分为以下步骤

- 1：初始化 shoplistReduser函数
- 2：将shoplistReduser 与 store对象进行**绑定**
    - 测试：初始化启动程序，是否会执行所有reducer，即使是组件中没有用到。 `不通过`
    - **结论：** 什么时候初始化 reducer函数
        - 1：UI组件中使用得 状态
        - 2：程序启动了
    > 1跟2作用：创建了一个全新的shoplist状态

- 3：在组件中，获取**初始化 shoplist state状态**
    - 测试redux是否存在状态
    - 测试shoplistReduser是否会执行 ----->执行---证明---->执行getState()时，会触发shoplistReduser函数
    - 测试所有reducer函数都执行一次  ----->执行--->证明--->初始化store状态时候，所有得reducer函数都执行
        - 什么时候初始化store？ --->第一次运行程序得时候
    
- 4：分析什么时候会更改状态，以什么方式更改
    - 4.1 初始化加载页面时，异步的新增方式
    > 第一次加载页面，发送获取第一页商品列表请求，请求成功后，更新shoplist state
    - 4.2 新建异步action
    - 4.3 在组件触发action
    - 4.4 在action中发送axios请求
    - 4.5 请求成功后触发shoplistReducer 更改state
    - 4.6 测试 shoplistReducer 是否可以收到更新的数据
> 更改redux中状态一般有几种方式
> 三种：增 删 改
> 修改方式命名：
> 增加：add concat increment...
> 删除：delete
> 修改：update

- 5：根据action.type 编写shoplistReducer 代码，完成行为逻辑
> 根据action.type='add' 完成新增操作
- 6：
