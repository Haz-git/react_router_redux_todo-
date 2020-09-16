export const addTodo = (payload) => {
    return {
        type: 'ADD_TODO',
        payload: payload
    }
}

export const delTodo = (payload) => {
    return {
        type: 'DEL_TODO',
        payload: payload
    }
}
