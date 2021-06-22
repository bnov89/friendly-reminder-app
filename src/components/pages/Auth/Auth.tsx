import React, { FormEvent, useContext } from 'react';
import { TextField } from '@material-ui/core';
import { AuthContext } from '../../store/AuthContext';

const Auth: React.FC = () => {
  let authCtx = useContext(AuthContext);

  function logIn(e: FormEvent) {
    e.preventDefault();
    console.log('Hello from logIn func');
    authCtx.login(true);
  }

  return (
    <div>
      <form onSubmit={logIn}>
        <TextField></TextField>
        <TextField></TextField>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Auth;
