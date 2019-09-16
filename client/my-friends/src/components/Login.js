import React, { useState } from 'react';
import Axios from 'axios';

const Login = () => {

    const initialState = {
        username: "",
        password: ""
    }

    const [credentials, setCredentials] = useState(initialState);
    console.log(credentials);

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        Axios
            .post('http://localhost:7200/api/login', credentials)
            .then(success => console.log(success))
            .catch(err => err)
    };

    return (
        <div className='login'>
            <h1>Hello from Login.js</h1>
            <form onSubmit={handleSubmit}>
                <p>Username:</p>
                <input
                    type='text'
                    name='username'
                    onChange={handleChange}
                />

                <p>Password:</p>
                <input
                    type='text'
                    name='password'
                    onChange={handleChange}
                />

                <br />

                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;
