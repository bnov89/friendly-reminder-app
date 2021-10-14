import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import PrivateRoute from '../routes/PrivateRoute';
import TodoList from '../pages/TodoLists/TodoLists';
import LoginPage from '../pages/Login/LoginPage';
import NotFound from '../pages/NotFound/NotFound';
import AuthContext from '../../store/auth-context';

const Routes: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <PrivateRoute path="/todo-lists" isAuthenticated={authContext.isLoggedIn}>
        <TodoList />
      </PrivateRoute>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
