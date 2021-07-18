import React, { FormEvent, useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';

const Auth: React.FC = () => {
  let authCtx = useContext(AuthContext);

  function logIn(e: FormEvent) {
    e.preventDefault();
    console.log('User logged in');
    authCtx.login(true);
  }

  return (
    <div>
      <form onSubmit={logIn}>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Auth;
