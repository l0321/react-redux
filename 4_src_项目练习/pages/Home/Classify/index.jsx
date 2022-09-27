import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import ShopCart from '../../../components/ShopCart'
import { getShopTypeOne } from '../../../api/goods';
import style from './index.module.scss'
export default function Classify() {
  let [shopList,setShopList] = useState([])
  let { type_one } = useParams();
  console.log(shopList);
  useEffect(()=>{
    getShopTypeOne(type_one).then((data) => {
      setShopList([...data])
    })
  },[type_one]);
  return (
    <div className='classify'>
      {/* 渲染分类商品列表 */}
      <div className={style.list}>
      {
        shopList.map(shop=>{
          return (
            <ShopCart shop={shop} />
          )
        })
      }
      </div>
    
    </div>
  )
}
