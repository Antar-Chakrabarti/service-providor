import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { Link,  useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/google.png';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});


    const [signInWithGoogle, user1, loading1, error2] = useSignInWithGoogle(auth);
    if(error1 || error2){
        setError(error1, error2)
    }

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

    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password)
    }
    const handleGoogleSignUp = ()=>{
        signInWithGoogle()
    }
    if (user || user1) {
        navigate('/')
    }
    return (
        <div className='login-container'>
            <div className="login-title">Sign up</div>
            <form className="login-form" onSubmit={handleSignUp}>
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Email' onChange={handleEmailChange} required />
                <input type="password" name="password" placeholder='Your Password' id="" onChange={handlePasswordChange} required />
                <button>sign up</button>
                {error && <p className='error-message'>{error}</p>}
                {error1 && <p className='error-message'>{error1}</p>}
                <Link className='signup-page' to='/login'>Login</Link>
                <button onClick={handleGoogleSignUp}>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    Continue with google
                </button>
                <p>{error}</p>
            </form>
        </div>
    );
};

export default Signup;