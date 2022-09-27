import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

let token = ''; //  登录-->存 --> 获取
export default function MyNavLink() {

    return (
        <div className='navlink'>
            <nav>
                <div className="nav-mid">
                    <div className="nav-top">
                        <img src={logo} alt="" />
                        {/* 搜索 */}
                        <div className="nav-right">
                            <div className="forms-clearfix">
                                <input type="text" name="" id="" placeholder="请输入想要的商品" />
                            </div>
                            <button id="search-button">
                                {/* ???? */}
                                <i className="iconfont icon-search"></i>搜索</button>
                        </div>
                    </div>
                    <div className="nav-bot">
                        <div id="nav-content">
                            {/* 这里只能有一个 */}
                            {
                                !token ? (
                                    <div className="nav-sub before">
                                        <NavLink style={linkActive} to="/home">首页</NavLink>
                                        <NavLink style={linkActive} to="/login">登录</NavLink>
                                        <NavLink style={linkActive} to="/register">注册</NavLink>
                                    </div>
                                ) : (
                                    <div className="nav-sub after">
                                        <NavLink style={linkActive} to="/home">首页</NavLink>
                                        <NavLink style={linkActive} to="/shopcar">购物车</NavLink>
                                        <NavLink style={linkActive} to="/logout">退出登录</NavLink>
                                    </div>
                                )
                            }


                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


function linkActive ( {isActive} ){
    if(isActive){
        // 高亮展示的路由 
        return {
            color: 'purple',
            fontWeight:900,
        }
    }else{
        return {
            color: 'black',
            fontWeight:400,
        }
    }
}