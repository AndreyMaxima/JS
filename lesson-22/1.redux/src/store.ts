import { combineReducers, createStore } from 'redux';
import listReducer from './reducers/listReducer';

const store = createStore( // Создание и экспорт Store (принимает reducer)
  combineReducers( // Функция для объединения нескольких редьюсеров в один
    {
      list: listReducer, // Наш редьюсер
    },
  ),
);

export default store;
