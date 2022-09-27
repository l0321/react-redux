export default function msgReducer(state='msg',action){
    console.log('msg reducter run');
    let {type,data} = action;
    if(type==='update'){
        return  state + data
    }else {
        return state
    }

}