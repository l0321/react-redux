import React from 'react'
import Routers from './router'
import MyNavLink from './components/MyNavLink'

export default function App() {
  return (
    <div>
      <MyNavLink />
      {/* 作用是什么：注册路由 */}
      <Routers />
    </div>
  )
}
