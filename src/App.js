import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from "./components/Home";
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home isLoggedIn={isLoggedIn} />} />                                    
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />                                    
                <Route path="/register" element={<Register />} />                    
                <Route path="/dashboard" element={<Dashboard />} />                    
            </Routes>
        </Router>
    );
}

export default App;
