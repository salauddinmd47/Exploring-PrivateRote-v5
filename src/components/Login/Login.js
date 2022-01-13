import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'; 
const Login = () => {
    const {handleGoogleSignIN} =  useAuth()
    return (
        <div>
            <h2>Please Sign In</h2>
            <button onClick={handleGoogleSignIN}>Google SignIn</button>
            <br />
            <Link to="/register">New user? Please Register</Link>
        </div>
    );
};

export default Login;