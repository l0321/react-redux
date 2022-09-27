import React from 'react'
import SubNav from '../../components/SubNav'
import { Outlet } from 'react-router-dom'
import './index.scss'
export default function Home() {
  return (
    <div className='home'>
      <SubNav />
      <Outlet />
    </div>
  )
}
