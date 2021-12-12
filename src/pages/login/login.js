import './login.css';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import loginImg from '../../images/login-undraw.svg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function LoginPage() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [demoEmail, setDemoEmail] = useState('test@gmail.com');
    const [demoPassword, setDemoPassword] = useState('password');

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                localStorage.setItem('token', userCredential._tokenResponse.idToken);
            })
            .catch(e => alert(e.message))
            .finally(() => history.push('/chat'))
    }

    const demoLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, demoEmail, demoPassword)
            .then((userCredential) => {
                localStorage.setItem('token', userCredential._tokenResponse.idToken);
            })
            .catch(e => alert(e.message))
            .finally(() => history.push('/chat'))
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            history.push('/chat')
        }
    }, [])

    return (
        <div className="login-container">
            <div className="login">
                <div className="info">
                    <img src={loginImg} />
                    <h2>Login to view thousands of recipes.</h2>
                </div>
                <div className="login-form">
                    <form>
                        <h1>Login.</h1>
                        <p>Don't have an account? <Link id='signupLink' to='/signup'>Sign Up</Link></p>
                        <div className="login-input-group">
                            <label>Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="login-input-group">
                            <label>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="login-button-group">
                            <button type="submit" onClick={login}>Login</button>
                            <button type="submit" onClick={demoLogin}>Demo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
