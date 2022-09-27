/**
 * 这里编写的action的代码
 */

import { ADD_TYPE,REDUCE_TYPE } from './count'

export const createAcion = (data) => {
    console.log('creat  action run ');
    return {
        data,
        type: ADD_TYPE,
    }
}

export const createReduceAcion = (data) => {
    console.log('creat reduce  action run ');
    return {
        data,
        type: REDUCE_TYPE,
    }
}