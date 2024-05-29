import React from 'react';
import LoginForm from '../Components/Login/LoginForm';
import Description from '../Components/Login/LoginDescription';
import './Styles/Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-form-container">
        <LoginForm />
      </div>
      <div className="description-container">
        <Description />
      </div>
    </div>
  );
};

export default Login;
