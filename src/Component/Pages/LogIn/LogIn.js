import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './LogIn.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const LogIn = () => {
    const navigate = useNavigate('')
    const location = useLocation()

    let from = location.state?.from?.pathname || "/"
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    if (loading) {
        return <p>loading...</p>
    }
    if (error) {
        alert(error)
    }

    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div className='container w-50 login-container'>
            <h1 className="text-info m-2">Please Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input ref={emailRef} type="email" name='email' className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault02" placeholder='E-mail' required />
                    <input ref={passwordRef} type="password" name="password" className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault03" placeholder='Password' required />
                </div>
                <p>Create a new account?<Link to="/signup" className='text-primary text-decoration-none'> Please Sign Up</Link></p>
                <div>
                    <button className="btn btn-primary" type="submit">Log In</button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;