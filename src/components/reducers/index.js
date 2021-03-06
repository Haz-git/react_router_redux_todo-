
const initialState = {
    todoList: []
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, todoList: [...state.todoList, action.payload]}
        default:
            return state;
    }
}

export default mainReducer;