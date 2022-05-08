import React from 'react';
import './Heder.css'
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = ()=>{
        signOut(auth)
      }
    return (
        <header className='sticky-top'>
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img className='img-fluid w-50' src="logo.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/blogs">Blogs</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/about">About</NavLink>
                        {
                            user ?
                                <button onClick={handleSignOut} className="link">Sign Out</button>

                                : <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/login">Login</NavLink>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;