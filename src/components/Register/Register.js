import React from 'react';

const Register = () => {
    const formStyle = {
        width:'50%',
        margin:'auto',
        textAlign:'center'
    }
    return (
        <div>
            <h2>Please Register</h2>
            <form style={formStyle}  >
                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" id="email" />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" name="password" id="password" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;