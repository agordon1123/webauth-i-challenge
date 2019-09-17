import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';
import Axios from 'axios';

const Login = props => {
    const initialState = {
        username: "",
        password: ""
    };

    const [credentials, setCredentials] = useState(initialState);

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        Axios
            .post('http://localhost:7200/api/login', credentials)
            // .then(() => props.history.push('/dashboard'))
            .then(success => console.log(success))
            .catch(err => console.log(err))
    };

    return (
        <div className='login form'>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <p>Username:</p>
                <Input
                    type='text'
                    name='username'
                    onChange={handleChange}
                />

                <p>Password:</p>
                <Input
                    type='text'
                    name='password'
                    onChange={handleChange}
                />

                <br />

                <Button type='submit'>Login</Button>
            </form>
        </div>
    );
};

export default Login;
