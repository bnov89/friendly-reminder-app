import React, { ChangeEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import useHttp from '../../../hooks/use-http';

export interface LoginProps {
  onSuccess: (data: LoginResponse) => void
}

export interface LoginResponse {
  accessToken: string;
}

const Login: React.FC<LoginProps> = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let useHtt = useHttp();
  const login = (event: React.SyntheticEvent) => {
    event.preventDefault();
    useHtt.sendRequest<LoginResponse>(
      {
        url: 'http://localhost:8080/user/login',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username: username, password: password }),
      },
      props.onSuccess
    );
  };

  function usernameChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.currentTarget.value);
  }

  function passwordChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value);
  }

  return (
    <div>
      <form onSubmit={login}>
        <TextField id="username" onChange={usernameChangeHandler} />
        <TextField
          id="password"
          type="password"
          onChange={passwordChangeHandler}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
