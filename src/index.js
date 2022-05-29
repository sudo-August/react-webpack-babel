import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/system';
import { CookiesProvider } from 'react-cookie';
import CssBaseline from '@mui/material/CssBaseline';

import App from './app';
import { darkTheme, lightTheme } from './style/theme';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <ThemeProvider theme={window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </CookiesProvider>
);