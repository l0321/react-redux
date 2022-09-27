import { getDetail } from "../../api/goods";
export const createShopActionAsync = (data)=>{
    console.log('shop action async',data);
    return async (dispatch)=>{
        // 异步触发shopReducer内容

        // 发送获取详情请求，请求成功后，触发reducer 更新state.
        let res = await getDetail(data);
        dispatch({
            data:res[0],
            type:"updateAsync",
        })
    }
}