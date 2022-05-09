import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../Components/SharedPage/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
    const [sendEmailVerification] = useSendEmailVerification(auth);

    if (error) {
        return toast(error?.message)
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return (
            <div>
                <h4>Your Email is not verified</h4>
                <h5>Please verify your Email</h5>
                <button
                    className='btn btn-outline-info'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent email');
                    }}
                >Resend</button>
                <ToastContainer></ToastContainer>
            </div>
        )
    }
    if (loading) {
        return <Loading></Loading>
    }
    return children;
};

export default RequireAuth;