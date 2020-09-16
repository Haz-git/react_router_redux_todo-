import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='ui clearing segment'>
            <div className='ui right floated header'>
                <Link to='/signin'>Sign In</Link>
            </div>
            <div className='ui center floated header'>
                <Link to='/'>Home</Link>
            </div>
            <div className='ui left floated header'>
                <Link to='/todo'>TodoApp</Link>
            </div>
        </div>
    )
}

export default Header;