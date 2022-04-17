import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../images/google.png';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, user1, loading1, error2] = useSignInWithGoogle(auth);

    const from = location.state?.from?.pathname || '/';
    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setEmail(e.target.value)
        } else {
            setError('Invalid Email')
        }

    }
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setPassword(e.target.value)
        } else {
            setError('Password should contain six character')
        }
    }
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);

    }

    const handleGoogleSignUp = () => {
        signInWithGoogle()
    }
    if (user || user1) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <p>Loading.....</p>
    }
    return (
        <div className='login-container'>
            <div className="login-title">Login</div>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" placeholder='Your Email' onChange={handleEmailChange} required />
                <input type="password" name="password" placeholder='Your Password' id="" onChange={handlePasswordChange} required />
                <button>Login</button>
                {error && <p className='error-message'>{error}</p>}
                {error1 && <p className='error-message'>{error1}</p>}
                <Link className='signup-page' to='/signup'>Sign up</Link>
                <button onClick={handleGoogleSignUp}>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    Continue with google
                </button>
            </form>
        </div>
    );
};

export default Login;