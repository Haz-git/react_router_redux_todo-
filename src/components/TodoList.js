import React from 'react';
import { connect } from 'react-redux';

const TodoList = ({ totalTodos }) => {

    return (
        <div className='ui segment'>
            <div className='ui relaxed divided list'>
            {totalTodos.map(e => {
                return (
                    <div className='item'>
                        <div className='content'>
                            <div className='header'>
                                {e.userInput}
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        totalTodos: state.todoList
    }
}

export default connect(mapStateToProps)(TodoList);