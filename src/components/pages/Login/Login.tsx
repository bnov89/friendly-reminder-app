import React, { ChangeEvent, useContext, useState } from 'react';
import { Alert, AlertTitle, Box, Button, TextField } from '@mui/material';
import useHttp from '../../../hooks/use-http';
import AuthContext from '../../../store/auth-context';
import { useHistory } from "react-router-dom";

export interface LoginData {
  accessToken: string;
}

const Login: React.FC = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let authContext = useContext(AuthContext);
  let useHtt = useHttp();
  const login = (event: React.SyntheticEvent) => {
    event.preventDefault();
    useHtt.sendRequest<LoginData>(
      {
        url: 'http://localhost:8080/user/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password }),
      },
      authContext.login
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
