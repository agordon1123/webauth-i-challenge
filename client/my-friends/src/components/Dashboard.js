import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Dashboard = props => {
    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {
        Axios
            .get('http://localhost:7200/api/users')
            .then(res => setUsers(res.data))
            .catch(err => alert(err));
    }, []);

    return (
        <div className='dashboard'>
            <p>Will need to pick up here with protected route</p>
        </div>
    );
};

export default Dashboard;
