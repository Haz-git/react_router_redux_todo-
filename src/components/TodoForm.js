import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

const TodoForm = () => {

    const [ userInput, setUserInput ] = useState('');

    const handleOnSubmit = (e) => {

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
                        <input type='text' placeholder='Add Todo...' onChange={handleOnChange}></input>
                        <button type='submit' className='ui primary button'>Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = state => {
    //Do we need state here?
}

export default connect(null, mapDispatchToProps)(TodoForm);