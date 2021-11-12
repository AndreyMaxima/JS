import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store /* Оборачивание приложения в провайдер стора */}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
