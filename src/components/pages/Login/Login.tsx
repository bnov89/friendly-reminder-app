import React from 'react';
import { Button, TextField } from "@mui/material";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const login = () => {};

  return (
    <div>
      <form onSubmit={login}>
        <TextField id="username"></TextField>
        <TextField id="password" type="password" ></TextField>
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
