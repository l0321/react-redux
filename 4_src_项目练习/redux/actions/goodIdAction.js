import { GOOD_ID_NAVIGATE } from '../config'
export const creatGoodIdAcion = (data)=>{
    return {
        data,
        type: GOOD_ID_NAVIGATE,
    }
}