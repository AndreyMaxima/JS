import React, {
  useCallback, useMemo, useReducer, useState,
} from 'react';
import { ToDoFilter } from '../constants/components';
import { addTodo } from '../actions/todo';
import { initialState, todo } from '../reducers/todo';

// @ts-ignore
let oldCallbackResult: (str: any) => void = null;

const ToDo = () => {
  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState(ToDoFilter.ALL);
  const [state, dispatch] = useReducer( // Возвращает массив (индекс 0 - state, индекс 1 - dispatch)
    todo, // Редьюсер, чей state и dispatch будет возвращён
    initialState, // Изначальное значение state
    (actualState) => ({ // В данную функцию будет передан initialState (второй параметр useReducer). Функция должна возвращать state, который будет назначен редьюсеру
      ...actualState,
      records: [...actualState.records, {
        done: false,
        text: 'Текст добавленный в useReducer',
      }],
    }),
  );
  const { records } = state;
  const handleAddTodo = () => {
    dispatch(addTodo(inputText));
    setInputText('');
  };

  const filteredRecords = useMemo(
    () => { // Функция для выполнения (не может принимать аргументы)
      console.log('record filter');
      switch (filter) {
        case 'done':
          return records.filter((record) => record.done);
        case 'not done':
          return records.filter((record) => !record.done);
        default:
          return records;
      }
    },
    [filter, records], // При изменеии значений, переданных в масиив функция, переданная выше, будет выполнена
  );

  const useCallbackResult = useCallback( // Возвращает мемоизированную функцию (ссылка на функцию будет меняться только при изменении аргументов)
    (str: any) => { // Функция для мемоизации (может принимать аргументы)
      console.log(useCallbackResult === oldCallbackResult);
      oldCallbackResult = useCallbackResult;
      console.log(str);
    },
    [filter], // Аргументы, при изменении которых будет изменена ссылка на функцию
  );
  useCallbackResult('use callback');

  return (
    <div className="todo-list">
      <button type="button" onClick={() => setFilter(ToDoFilter.ALL)}>Все</button>
      <button type="button" onClick={() => setFilter(ToDoFilter.NOT_DONE)}>Невыполненные</button>
      <button type="button" onClick={() => setFilter(ToDoFilter.DONE)}>Выполненные</button>
      <ul>
        {filteredRecords.map((record, index) => (
          <li key={index}>
            {record.text}
            {record.done && ' - выполнено'}
          </li>
        ))}
      </ul>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button type="button" onClick={handleAddTodo}>Добавить</button>
    </div>
  );
};

export default ToDo;
