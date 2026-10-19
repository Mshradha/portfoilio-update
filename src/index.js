import React from 'react';
import ReactDOM from 'react-dom';

import './styles/tokens.css';
import './styles/base.css';
import App from './App';
import ThemeContextProvider from './contexts/ThemeContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
