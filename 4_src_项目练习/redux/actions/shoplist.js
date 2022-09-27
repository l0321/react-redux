// 新建异步得action

import {getShopList} from '../../api/goods'
export function ShoplistActionAsync(page){
    return (dispatch) =>{
        // 发送请求：
        // 请求参数：page在哪里能获取
        getShopList(page).then(data=>{
            console.log('-------------',data);
            dispatch({
                data,
                type:'add',
            })
        })
    }
}

