import React from 'react';
import './login.scss';

export const Login = () => {
  const login = () => {
    window.open('/api/auth/google', '_self');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Login with Google</button>
    </div>
  );
};

export default Login;
