import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";


function Home(props) {
    const { isLoggedIn } = props;

    return (
        <div>
            <nav>
                {!isLoggedIn ? (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">SignUp</Link>
                    </>
                ) : (
                    <Link to="/dashboard">Go to Dashboard</Link>
                )}
            </nav>

            <div>
                <h1>Welcome to Employee Loan Application</h1>
                {!isLoggedIn && <p>Please SignUp or Login to proceed</p>}
            </div>
        </div>
    );
}

export default Home;


