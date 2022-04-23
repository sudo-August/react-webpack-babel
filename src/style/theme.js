import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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

export default theme;