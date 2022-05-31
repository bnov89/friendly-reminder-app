import React, { useEffect, useState } from "react";
import { LoginData } from "../pages/login";
import { useRouter } from "next/router";
import { HOME } from "../components/Paths";

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: (loginData: LoginData) => {
  },
  logout: () => {
  }
});

export const AuthenticationProvider: React.FC = (props) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("accessToken") !== null);
  }, []);

  function loginHandler(loginData: LoginData) {
    localStorage.setItem("accessToken", loginData.accessToken);
    localStorage.setItem("userAccountNumber", loginData.userAccountNumber);
    setIsLoggedIn(true);
    router.push(HOME);
  }

  function logoutHandler() {
    localStorage.removeItem("accessToken");
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
