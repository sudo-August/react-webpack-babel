import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#33963d',
      light: '#48904f',
      dark: '#26c335',
    },
    secondary: {
      main: '#8f62a2',
      light: '#71577b',
      dark: '#3f1b4e',
    },
    background: {
      default: '#f1f5f2',
      paper: '#f4f9f5',
    },
  },
  typography: {
    h2: {
      fontFamily: 'Roboto',
    },
    fontFamily: 'Roboto',
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#279e33',
      light: '#46dc54',
      dark: '#0d7117',
    },
    secondary: {
      main: '#9f67b5',
      light: '#caa6d8',
      dark: '#4e1267',
    },
    background: {
      default: '#505652',
      paper: '#222b24',
    },
    text: {
      primary: '#f3efef',
      secondary: 'rgba(255,255,255,0.7)',
      disabled: 'rgba(241,72,72,0.5)',
      hint: 'rgba(72,89,206,0.5)',
    },
  },
  typography: {
    h2: {
      fontFamily: 'Roboto',
    },
    fontFamily: 'Roboto',
  },
});