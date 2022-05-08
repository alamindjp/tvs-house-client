import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
const navigate = useNavigate('')
const location = useLocation()

let from = location.state?.from?.pathname || "/"
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleSignUp = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    if (loading){
            return <p>Loading...</p>;
    }
    if (error){
        alert(error)
    }
    if (user){
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
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                        <label className="form-check-label">Agree to terms and conditions</label>
                    </div>
                </div>
                <p>Have an account?<Link to="/login" className='text-primary text-decoration-none'> Please login</Link></p>
                <div>
                    <button className="btn btn-primary" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;