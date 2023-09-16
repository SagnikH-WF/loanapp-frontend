import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './register';
import Dashboard from './dashboard';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" exact>
                    <Home isLoggedIn={isLoggedIn} />
                </Route>
                <Route path="/login">
                    <Login setIsLoggedIn={setIsLoggedIn} />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
