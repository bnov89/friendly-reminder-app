import React, { useState } from "react";

type AuthContextObj = {
  isLoggedIn: boolean;
  login: (loggedIn: boolean) => void
};

export const AuthContext = React.createContext<AuthContextObj>({
  isLoggedIn: false,
  login: () => {
    console.log("Default login function")
  }
});

const AuthContextProvider: React.FC = (props) => {

  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  const contextValue: AuthContextObj = {
    isLoggedIn: isLoggedIn,
    login: setLoggedIn
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
