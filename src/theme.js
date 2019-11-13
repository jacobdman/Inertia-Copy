import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './Components/AppBar/AppBar';

const theme = createMuiTheme({
  typography: {
    color: '#fff',
    useNextVariants: true,
  },
  palette: {
    type: 'light',
    background: {
      // '#000',
      // '#1b1b1b',
      // '#424242',
      // '#6d6d6d',
      // '#9b9b9b',
      // '#ccc',
      // '#fff',
      darkGrey: '#1b1b1b',
      default: '#eee',
      // paper: '#6d6d6d',
    },
    primary: {
      main: '#9575cd',
    },
  },
  zIndex: {
    appBar: 1100,
  },
  button: {
    '&:hover': {
      color: '#fff',
      background: '#9575cd',
    },
  },
  buttonAlt: {
    '&:hover': {
      color: '#9575cd',
      background: '#fff',
      border: '1px solid #9575cd',
    },
  },
});

const Theme = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar />
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default Theme;
