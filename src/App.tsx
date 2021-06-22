import React from 'react';
import Layout from './components/Layout';
import AuthContextProvider from './components/store/AuthContext';
import { Provider } from 'react-redux';
import store from './components/store/AuthRedux';

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <Layout />
      </Provider>
    </AuthContextProvider>
  );
};

export default App;
