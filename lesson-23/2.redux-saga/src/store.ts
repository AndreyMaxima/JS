import { combineReducers, createStore } from 'redux';
import listReducer from './reducers/listReducer';
import comments from './reducers/commentsReduces';

const store = createStore( // Создание и экспорт Store (принимает reducer)
  combineReducers( // Функция для объединения нескольких редьюсеров в один
    {
      list: listReducer, // Наш редьюсер
      comments,
    },
  ),
);

//  -----------------Код ниже демонстрационный, в нём нет необходимости
store.dispatch({ // Отправляет action в reducer
  type: 'START_DEMONSTRATION_ACTION',
});
console.log(store.getState()); // Получение стейта
store.subscribe( // Подписка функции на изменения
  () => console.log(store.getState()), // Функция, которая будет выполнятся при каждом изменении store
);
// store.replaceReducer() // Замена редьюсера
//  -----------------Финал демонстрационного кода------------------------

export default store;
