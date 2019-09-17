import React, { useState } from 'react';
import Axios from 'axios';
import { Button, Input } from 'reactstrap';

const Signup = props => {
    const initialState = {
        username: "",
        password: ""
    };

    const [newUser, setNewUser] = useState(initialState);

    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        Axios
            .post('http://localhost:7200/api/register', newUser)
            .then(() => props.history.push('/dashboard'))
            .catch(err => alert(err));
    };

    return (
        <div className='signup form'>
            <h1>Sign Up</h1>
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

                <Button type='submit'>Submit</Button>
            </form>
        </div>
    );
};

export default Signup;
