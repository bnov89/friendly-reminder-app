import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';

export interface ExtendedRouteProps extends RouteProps {
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<ExtendedRouteProps> = ({
  children,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? children : <LoginPage />)}
    ></Route>
  );
};

export default PrivateRoute;
