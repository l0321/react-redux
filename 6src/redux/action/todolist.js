export function createTodolistAddAction(data){
    console.log('run');
    return {
        type:'add',
        data,
    }
}