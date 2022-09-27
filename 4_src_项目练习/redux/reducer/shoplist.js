/**
 * 
 */

let initState = []
export default function shoplistReducer(state=initState,action){
    console.log('shop list reducer run');
    let {type,data} = action;
    switch (type){
        case 'add':
            return [...state,...data]
        default:
            return state
    }
    console.log(data,type);

    return state
}