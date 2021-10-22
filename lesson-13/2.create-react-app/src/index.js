import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render( // Отрендерить компонент
  <React.StrictMode> {/*Какой компонент*/}
    <App/>
  </React.StrictMode>,
  document.getElementById('root') // Куда поместить
);
