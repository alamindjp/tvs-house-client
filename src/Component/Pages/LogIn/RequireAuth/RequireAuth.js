import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../Components/SharedPage/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    const [sendEmailVerification] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    if (!user.emailVerified) {
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
    return children;
};

export default RequireAuth;