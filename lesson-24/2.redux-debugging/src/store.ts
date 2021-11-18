import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { todo } from './reducers/todo';

const store = createStore(
  combineReducers({ todo }),
  devToolsEnhancer({}),
);

export default store;
