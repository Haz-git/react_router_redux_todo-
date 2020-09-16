import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

const TodoForm = ({ addTodoKeyPassedAsProp }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(userInput);
        addTodoKeyPassedAsProp({ userInput });
        setUserInput('');
    }//submit through action..

    const handleOnChange = (e) => {
        setUserInput(e.target.value);
    }

    return (
        <div>
            <hr></hr>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <div className='ui input'>
                        <input type='text' placeholder='Add Todo...' onChange={handleOnChange} value={userInput}></input>
                        <button type='submit' className='ui primary button'>Add</button>
                    </div>
                </div>
            </form>
            <hr/>
        </div>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoKeyPassedAsProp: todo => dispatch(addTodo(todo))
    }
}

export default connect(null, mapDispatchToProps)(TodoForm);