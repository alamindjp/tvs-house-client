import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './LogIn.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogIn from './SocialLogIn/SocialLogIn';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Loading from '../../Components/SharedPage/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const emailRef = useRef('');
    const passwordRef = useRef('');

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        error(error)
    }

    if (user) {
        navigate(from, { replace: true })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Send Email')
        }
        else{
            toast('Please enter your email')
        }
    }

    return (
        <div className='container w-50 login-container'>
            <h1 className="text-info m-2">Please Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input ref={emailRef} type="email" name='email' className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault02" placeholder='E-mail' required />
                    <input ref={passwordRef} type="password" name="password" className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault03" placeholder='Password' required />
                </div>
                <div>
                    <button className="btn btn-primary mt-2" type="submit">Log In</button>
                </div>
            </form>
            <p className='mt-4'>New to TVS House?<Link to="/signup" className='text-primary text-decoration-none'> Please Sign Up</Link></p>
            <p className='mt-4'>Forget Password?<button onClick={resetPassword} className='btn btn-link text-primary text-decoration-none'> Reset Password</button></p>
            <SocialLogIn></SocialLogIn>
            <ToastContainer />
        </div>
    );
};

export default LogIn;