import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../Components/SharedPage/Loading/Loading';
import img from './../../../../images/google-icon.png'

const SocialLogIn = () => {
    const navigate = useNavigate('');
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    let loadingElement;

    if (googleUser) {
        navigate(from, { replace: true });
    }
    if (googleError) {
        errorElement = <div>
            <p className='text-danger my-4'>Error: {googleError?.message}</p>
        </div>

    }
    if (googleLoading) {
        loadingElement = <Loading></Loading>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            {loadingElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-info w-50'><img src={img} alt="" />Continue with Google</button>
            </div>

        </div>
    );
};

export default SocialLogIn;