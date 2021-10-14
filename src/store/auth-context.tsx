import React, { useState } from 'react';
import { LoginData } from '../components/pages/Login/Login';

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: (loginData: LoginData) => {},
  logout: () => {}
});

export const AuthenticationProvider: React.FC = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  function loginHandler(loginData: LoginData) {
    localStorage.setItem('accessToken', loginData.accessToken);
    setIsLoggedIn(true);
  }

  function logoutHandler() {
    localStorage.removeItem('accessToken')
    setIsLoggedIn(false);
  }

  const contextValue = {
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
