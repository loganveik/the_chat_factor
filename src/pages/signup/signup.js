import './signup.css';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import signupImg from '../../images/signup-undraw.svg';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

function SignupPage() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = (e) => {
        e.preventDefault();
        // setRegisterLoading(true);
        // const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        setName('');
                        setEmail('');
                        setPassword('');
                    })
                    .catch(e => alert(e.message));
            }).catch(e => alert(e.message))
            .finally(() => history.push('/'))
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            history.push('/chat')
        }
    }, [])

    return (
        <div className="signup-container">
            <div className="signup">
                <div className="info">
                    <img src={signupImg} />
                    <h2>Sign up to get started.</h2>
                </div>
                <div className="signup-form">
                    <form>
                        <h1>Sign Up.</h1>
                        <p>Already have an account? <Link id='loginLink' to='/'>Login</Link></p>
                        <div className="signup-input-group">
                            <label>Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="signup-input-group">
                            <label>Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="signup-input-group">
                            <label>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="signup-button-group">
                            <button type="submit" onClick={signup}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;
