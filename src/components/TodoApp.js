import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
    return (
        <div>
            <div>
                <h1> TodoApp </h1>
            </div>
            <div>
                <TodoForm />
            </div>
            <div>
                <TodoList />
            </div>
        </div>
    )
}

export default TodoApp;