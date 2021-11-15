import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import comments from './reducers/commentsReduces';
import commentsWatcher from './saga/comments';

const middleware = (store: any) => (next: any) => (action: any) => { // Пример прослойки логгирования
  console.group(`${action.type} log`);
  console.log(action);
  console.log(store);
  console.groupEnd();
  next(action);
};

const sagaMiddleware = createSagaMiddleware(); // Создание прослойки saga

const store = createStore(
  combineReducers(
    {
      comments,
    },
  ),
  applyMiddleware(middleware, sagaMiddleware), // Применение middleware
);

sagaMiddleware.run(commentsWatcher); // Подключение watcher к saga. Должно быть после подключения прослойки (applyMiddleware)

export default store;
