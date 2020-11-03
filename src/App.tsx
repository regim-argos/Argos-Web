import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';

import theme from '@chakra-ui/theme';
import { store, persistor } from './store';

import GlobalStyle from './styles/global';
import Routes from './routes';
import './styles/styles.css';

import history from './services/history';
import 'react-perfect-scrollbar/dist/css/styles.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <Router history={history}>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </Router>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
