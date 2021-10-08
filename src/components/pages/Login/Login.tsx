import React, { ChangeEvent, useState } from 'react';
import { Alert, AlertTitle, Box, Button, TextField } from '@mui/material';
import useHttp from '../../../hooks/use-http';

export interface LoginProps {
  onSuccess: (data: LoginResponse) => void;
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password }),
      },
      props.onSuccess
    );
  };

  if (useHtt.error) {
    console.log('Hello' + JSON.stringify(useHtt.error));
  }

  function usernameChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.currentTarget.value);
  }

  function passwordChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value);
  }

  return (
    <Box sx={{ textAlign: 'center' }}>
      {useHtt.error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {useHtt.error.error.reason}
        </Alert>
      )}
      <form onSubmit={login}>
        <Box sx={{ display: 'block', margin: '10px' }}>
          <TextField
            id="username"
            label="Username"
            onChange={usernameChangeHandler}
          />
        </Box>
        <Box sx={{ display: 'block', margin: '10px' }}>
          <TextField
            id="password"
            type="password"
            label="Password"
            onChange={passwordChangeHandler}
          />
        </Box>
        <Box sx={{ display: 'block', margin: '10px' }}>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
