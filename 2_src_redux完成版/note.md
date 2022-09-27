# redux完整

## 目录
~~~
|-- redux
  |-- store.js         创建store实例，并导出，是redux中枢
  |-- countAction.js   创建生成action对象的函数。函数返回值为 {type,data},支持同步，异步
  |-- countReducer.js  船舰reducer函数，完成具体，输出，更新state逻辑
  |-- count.js         定义常量，行为常量(action.type)
|-- count.jsx          UI组件
~~~

## redux完整的工作流程是什么？

- 1：ui 组件中通过 `store.getState()`获取`store`中的状态
- 2：`store` 收到获取状态信号后，触发`reducer` 函数，输出最新的状态
- 当有action更改store中state时，
- 1：在ui组件中通过`store.dispatch(action)` 传入action对象，告诉store,什么行为，什么数据
- 2：`store` 收到action后，命令`reducer` 根据`acion.type` 修改state，并输出最新你的状态。




