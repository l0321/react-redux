# todolist redux版本

## 开始

### 1.静态组件

- addTodo
- todolist
- total

### 2.分析静态页面展示的数据结构

~~~
[
    {
        id:'123213123',
        active:false,
        msg:'列表内容'
    }
]
~~~

### 3.redux对todoList进行管理

> 2 分析得数据结构，也是redux中store中存放得 todolist 状态 得结构

#### 1.初始化store

> 要求：完成store对象创建，并可以在react中组件都监测到，store状态

- 1.1 创建store
- 1.2 将store对象与应用程序进行绑定
    - > 让store对象能够监测所有组件

#### 2.在store上新建状态

##### 2.1 新建 todolist状态

如何完成新建todolist状态？
- 1：新建todolistReducer函数，输出初始化状态值
- 2：将todolistReducer函数与store结合

> 任意找一个组件，通过 store.getState() 测试返回值

#### 3. 分析组件对todolist有哪些操作

> 不用一次性分析完所有内容，可以一个组件一个组件分析

##### 3.1 addtodo

> 点击添加，往todolist 状态中新增一个对象，同步

- 1：新建新增的同步action(行为)
- 2：点击添加，带上action，触发 `todolistReducer`完成新增行为
- 3：在`todolistReducer`中完成更改 todolist 状态，新增方式

> 测试：


##### 3.2 todolist

> 1：获取todolist 状态，并渲染
    - 初始化获取 store中 todolist 渲染
> 2：根据id 删除todolist中对象
    - 1：新建 删除的action
    - 2：点击删除---> 带着 action 触发todolistReducer完成三处
    - 3：在`todolistReducer`中更新最新状态
> 3：根据id 更新todolist中对象中的active
    - 新建更新的action
    - 带着action 触发todolistReducer完成更新

##### 3.3 total