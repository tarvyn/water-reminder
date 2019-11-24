import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { indigo, pink, red } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/core/styles';
import configureStore from '@react-client/store/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
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
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
