import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import comments from './reducers/commentsReduces';
import post from './reducers/postReducer';

const store = createStore(
  combineReducers(
    {
      comments,
      post,
    },
  ),
  composeWithDevTools(applyMiddleware(thunk)), // devToolsEnhancer({ *настройки или пустой объект* }), если не используем прослойки
);

export default store;
