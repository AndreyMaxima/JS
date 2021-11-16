import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import comments from './reducers/commentsReduces';

const middleware = (store: any) => (next: any) => (action: any) => { // Пример прослойки логгирования
  console.group(`${action.type} log`);
  console.log(action);
  console.log(store);
  console.groupEnd();
  next(action);
};

const store = createStore(
  combineReducers(
    {
      comments,
    },
  ),
  applyMiddleware(thunk, middleware),
);

export default store;
