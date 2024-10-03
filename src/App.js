import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Orders from './Orders';
import './App.css'; 
import './Signup.css';


const App = () => {
  return (
    <div>
      <h1>Intern Assignment</h1>
      <Signup />
      <Login />
      <Orders />
    </div>
  );
};



export default App;
