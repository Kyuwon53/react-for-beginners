import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Todo from './Todo';
import Coin from './Coin';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Todo />
    <Coin />
  </React.StrictMode>,
  document.getElementById('root')
);
