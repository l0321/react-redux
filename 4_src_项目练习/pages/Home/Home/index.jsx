import React, { useEffect, useState } from 'react'
import Swiper from '../../../components/swiper'
import ShopCart from '../../../components/ShopCart'
import './index.scss'
// import { getShopList } from '../../../api/goods'
import store from '../../../redux'
import { ShoplistActionAsync } from '../../../redux/actions/shoplist'

export default function Home() {
  // let [shopList, setShopList] = useState([]);
  let shopList = store.getState().shoplist
  console.log('------------------->',shopList);


  let page = 1;
  useEffect(() => {
    // getShopList(page).then((data) => {
    //   setShopList(data)
    // })
    store.dispatch(ShoplistActionAsync(page))
  }, [])
  let imgs = [
    {
      src: require('../../../assets/images/a.jpg')
    }, {
      src: require('../../../assets/images/b.jpg')
    }, {
      src: require('../../../assets/images/c.jpg')
    }, {
      src: require('../../../assets/images/d.jpg')
    }, {
      src: require('../../../assets/images/e.jpg')
    }
  ]
  return (
    <div className='HomeIndex'>
      {/* 轮播 */}
      <div className="banner">
        <Swiper data={imgs} />

      </div>
      {/* 商品列表 */}
      <div className="main">
        <div className='list'>
          {
            shopList.map(shop => {
              return (
                <ShopCart key={shop.Id} shop={shop}/>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}
