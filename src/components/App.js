import React from 'react';
import Header from './Header';
import SignIn from './SignIn';
import TodoApp from './TodoApp';
import LandingPage from './LandingPage';
import { BrowserRouter, Route } from 'react-router-dom';



const App = () => {
    return (
        <div className='ui container'>
            <BrowserRouter>
                <Header />
                <Route path='/' exact component={LandingPage} />
                <Route path='/signin' exact component={SignIn} />
                <Route path='/todo' exact component={TodoApp} />
            </BrowserRouter>
        </div>
    )
}

export default App;