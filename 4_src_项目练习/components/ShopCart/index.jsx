import React from 'react'
import style from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import store from '../../redux'
import { creatGoodIdAcion } from '../../redux/actions/goodIdAction'
export default function ShopCar({shop}) {
    let navigate = useNavigate();
    const linkDetal = ({Id})=>{
        // navigate(`/detail/${Id}}`)
        // 1: 将id复制给 store中goodId
        store.dispatch(creatGoodIdAcion(Id))
        navigate('/detail')
    }
    return (
        <div className={style.shop} key={shop.Id} onClick={()=>linkDetal(shop)}>
            <img src={shop.img_list_url} alt="" />
            <h3>{shop.title}</h3>
            <p><span className="money">￥{shop.price}</span>
                <span className="mack" dangerouslySetInnerHTML={{ __html: shop.mack }}>
                    {/* 
        怎么在vnod上插入html字符串
        dangerouslySetInnerHTML: 富文本,在react插入html 字符
         */}
                </span></p>
        </div>)
}
