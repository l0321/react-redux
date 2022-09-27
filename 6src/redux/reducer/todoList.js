

export default function TodoListReducer(state = [], action) {
    console.log('todo list run');
    console.log(action);
    let { type, data } = action
    switch (type) {
        case 'add':
            return [...state,data]
        case 'delet':
            // let res = state.filter(item=>item.id !=data)
            // return res
            return data
        default:
            return state
    }
}