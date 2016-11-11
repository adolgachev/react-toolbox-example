import 'react-toolbox/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-css-themr';
import partner from './theme/partner.js';
import App from './App.js';

ReactDOM.render(
  <ThemeProvider theme={partner}>
    <App />
  </ThemeProvider>
  , document.getElementById('app')
)
