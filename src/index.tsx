import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import { AuthenticationProvider } from './store/auth-context';

ReactDOM.render(
  <BrowserRouter>
    {/*<AuthenticationProvider>*/}
    {/*  <App />*/}
    {/*</AuthenticationProvider>*/}
  </BrowserRouter>,
  document.getElementById('todo-app-root')
);
