import './signup.css';
import React from 'react';
import { Link } from 'react-router-dom';
import signupImg from '../../images/signup-undraw.svg';

function signupPage() {
    return (
        <div className="container">
            <div className="login">
                <div className="info">
                    <img src={signupImg} />
                    <h2>Sign up to get started.</h2>
                </div>
                <div className="form">
                    <form>
                        <h1>Sign Up.</h1>
                        <p>Already have an account? <Link id='loginLink' to='/'>Login</Link></p>
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text" />
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        <div className="button-group">
                            <button type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default signupPage;
