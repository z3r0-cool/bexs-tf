import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Router from './routes';


ReactDOM.render(
  <>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </>,
  document.getElementById('root')
);
