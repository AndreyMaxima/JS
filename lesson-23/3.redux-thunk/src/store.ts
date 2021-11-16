import { combineReducers, createStore } from 'redux';
import comments from './reducers/commentsReduces';

const store = createStore(
  combineReducers(
    {
      comments,
    },
  ),
);

export default store;
