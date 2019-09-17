import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Landing = () => {
    return (
        <div className='landing'>
            <Jumbotron>
                <h1 className="display-3">Welcome to Camo-leon</h1>
                <p className="lead">Camoleon is a social app that utilizes anonymity to encourage open conversation.</p>
                <hr className="my-2" />
                <p>Login or sign up below to get started</p>
                <p className="lead">
                <Button href='/register' color="primary">Get Started</Button>
                </p>
            </Jumbotron>
        </div>
    );
};

export default Landing;
