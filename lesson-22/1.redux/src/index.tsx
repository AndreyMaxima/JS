import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

//  Работа immer.produce
// const obj: any = {
//   key1: '123123',
//   key2: '123412',
// };
//
// const objAfterProduce = produce(obj, (draft: any) => {
//   // eslint-disable-next-line no-param-reassign
//   draft.key1 = 'newValue';
//   return draft;
// });
//
// console.log(obj);
// console.log(objAfterProduce);
// console.log(obj === objAfterProduce) // false возвращается новый объект

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store /* Оборачивание приложения в провайдер стора */}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
