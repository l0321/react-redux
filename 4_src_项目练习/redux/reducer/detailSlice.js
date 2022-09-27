export function shopReducer (state={},action) {
    console.log('shop reducer');
    let {type,data} = action
    switch(type){
        case 'updateAsync':
            return data
        default:
            return state;
    }
}