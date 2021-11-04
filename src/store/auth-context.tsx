import React, { useState } from 'react';
import { LoginData } from '../components/pages/Login/Login';
import { useHistory } from 'react-router-dom';

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: (loginData: LoginData) => {},
  logout: () => {},
});

export const AuthenticationProvider: React.FC = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.getItem('accessToken') !== null
  );
  const history = useHistory();

  function loginHandler(loginData: LoginData) {
    localStorage.setItem('accessToken', loginData.accessToken);
    localStorage.setItem('userAccountNumber', loginData.userAccountNumber);
    setIsLoggedIn(true);
    history.push('/');
  }

  function logoutHandler() {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  }

  const contextValue = {
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
