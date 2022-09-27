import request from './request'

// 获取商品分类？
export function getTypeOne(){
    return request({
        url:'/api/getTypeOne',
        method:'get',
        params:{}
    })
}

// 获取商品列表

export function getShopList(page){
    return request({
        url:'/api/goodlist',
        method:'get',
        params:{
            page,
        }
    })
}

// 获取分类商品

export function getShopTypeOne(type_one){
    return request({
        url:'/api/goodlist',
        method:'get',
        params:{
            type_one
        }
    })
}

export function getDetail(goodId){
    return request({
        url:'/api/detail',
        method:'get',
        params:{
            goodId
        }
    })
}