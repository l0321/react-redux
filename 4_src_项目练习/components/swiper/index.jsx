import { Carousel } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'; 
import './index.scss'
// 二次封装
// 1:在别人的功能基础上,提取项目中需要的api,在\
// 2:自定义一些api 另外支持一些其他功能
// 3:强制更改某些样式，让其与项目匹配。

/**
 * data:[]{src,url}   必填
 * autoplay: ture | false  可选
 * duration 轮播事件间隔  可选
 */

// 轮播图支持,点击跳转链接
export default ({ data = [], autoplay = true, duration }) => {
    return (
        <div className="swiper">
            <Carousel autoplay={autoplay}>
                {
                    data.map(({ src, url },index) => {
                        return (
                            <div key={index}>
                                <img src={src} alt="" />
                                {
                                    url ? (
                                        <Link to={url} />
                                    ) : ''
                                }

                            </div>
                        )
                    })
                }
            </Carousel>
        </div>

    )
}


// 我做了什么？
// 我为什么这么做?