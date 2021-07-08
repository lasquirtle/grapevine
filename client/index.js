import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import styles from './styles/styles.css';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)