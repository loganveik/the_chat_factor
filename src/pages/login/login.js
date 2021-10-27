import './login.css';
import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../images/login-undraw.svg';

function loginPage() {
    return (
        <div className="container">
            <div className="login">
                <div className="info">
                    <img src={loginImg} />
                    <h2>Login to view thousands of recipes.</h2>
                </div>
                <div className="form">
                    <form>
                        <h1>Login.</h1>
                        <p>Don't have an account? <Link id='signupLink' to='/signup'>Sign Up</Link></p>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        <div className="button-group">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default loginPage;
