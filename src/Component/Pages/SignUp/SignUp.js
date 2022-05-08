import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Components/SharedPage/Loading/Loading';
import SocialLogIn from '../LogIn/SocialLogIn/SocialLogIn';

const SignUp = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate('')
    const location = useLocation()

    let from = location.state?.from?.pathname || "/"
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const handleSignUp = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (agree) {
            createUserWithEmailAndPassword(email, password)
        }
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        alert(error)
    }
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div className='container w-50 login-container'>
            <h1 className="text-info m-2">Please SignUp</h1>
            <form onSubmit={handleSignUp}>
                <div>
                    <input type="text" name='name' className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault01" placeholder='Enter Your Name' required />
                </div>
                <div>
                    <input type="email" name='email' className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault02" placeholder='Enter Your Email' required />
                    <input type="password" name="password" className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault03" placeholder='Create a Password' required />
                </div>
                <div>
                    <div className="form-check my-3 text-start">
                        <input onClick={() => setAgree(!agree)} className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label">Agree to terms and conditions</label>
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary my-2" type="submit" disabled={!agree}>Sign Up</button>
                </div>
            </form>
            <p className='mt-2'>Have an account?<Link to="/login" className='text-primary text-decoration-none '> Please login</Link></p>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default SignUp;