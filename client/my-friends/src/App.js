import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' component={Landing} />
      <Route path='/login' render={props => <Login {...props} />} />
      <Route path='/register' render={props => <Signup {...props} />} />
      <Route path ='/dashboard' render={props => <Dashboard {...props} />} />
    </div>
  );
}

export default App;
