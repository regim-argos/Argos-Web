import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';
import { ThemeProvider } from '@material-ui/core';
import { store, persistor } from './store';

import GlobalStyle from './styles/global';
import Routes from './routes';
import './styles/styles.css';

import history from './services/history';
import 'react-perfect-scrollbar/dist/css/styles.css';
import theme from './styles/theme';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
