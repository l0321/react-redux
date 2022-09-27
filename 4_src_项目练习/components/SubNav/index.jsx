import React,{useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
import { getTypeOne } from '../../api/goods'
export default function SubNav() {
  let [navs,setNavs] = useState([])
  // 初始化获取商品分类
  useEffect(()=>{
    getTypeOne().then(data=>{
      setNavs(data)
    })
  },[])
  return (
    <div className='subNav'>
      <div className="shoplist">
        <div className="shop">
          {
            navs.map(item=>{
              return (
                <NavLink key={item} style={linkActive} to={"/home/classify/"+item}>{item}</NavLink>
              )
            })
          }
        

        </div>
      </div>
    </div>
  )
}

function linkActive ( {isActive} ){
  if(isActive){
      // 高亮展示的路由 
      return {
        background:'purple',
        color: '#dedede',
      }
  }else{
      return {
        background:'#fff',
        color: '#000',
      }
  }
}
