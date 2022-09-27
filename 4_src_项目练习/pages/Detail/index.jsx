import React, { useEffect } from 'react'
import store from '../../redux'
import { createShopActionAsync } from '../../redux/actions/detail'

export default function Detail() {
  useEffect(() => {
    console.log('init detail');
    let id = store.getState().goodId
    //  store.dispatch(createShopActionAsync(id));
    // bug: 异步action的bug 
    // 因为,action是异步的， 所以 由 dispatch 触发触发的整个redux流程都是异步的，都是慢程序
    // 所以：consoLe.log() 先执行了，所以bug
    // console.log(store.getState().shop,'===========================');


    // 解决：异步问题同步化 
    store.dispatch(createShopActionAsync(id)).then(res => {
      console.log('reducer执行完成触发then的回调用', id);
      console.log(store.getState().shop, '===========================');

    })
  }, [])
  return (
    <div>
      <h1>渲染redux中goodId: { }</h1>
    </div>
  )
}
