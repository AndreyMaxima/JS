import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import comments from './reducers/commentsReduces';

const store = createStore(
  combineReducers(
    {
      comments,
    },
  ),
  applyMiddleware(thunk),
);

export default store;
