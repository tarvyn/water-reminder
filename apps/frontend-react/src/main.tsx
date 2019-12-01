import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { indigo, pink, red } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/core/styles';
import configureStore from '@react-client/store/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from '@react-client/shared/models/history';
import App from './app';

const store = configureStore();
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById('root')
);
