import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State, ToDoRecord } from '../types/state';
import * as actions from '../actions/todo';
import { getTodoRecords } from '../selectors/state';
import { ToDoFilter } from '../constants/components';

interface Props {
  records: Array<ToDoRecord>
  addTodo: (text: string) => void
}

const ToDo = ({ records, addTodo }: Props) => {
  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState(ToDoFilter.ALL);
  const handleAddTodo = () => {
    addTodo(inputText);
    setInputText('');
  };

  const filteredCard = useMemo(
    () => { // Функция для выполнения
      console.log('record filter');
      switch (filter) {
        case 'done': return records.filter((record) => record.done);
        case 'not done': return records.filter((record) => !record.done);
        default: return records;
      }
    },
    [filter, records], // При изменеии значений, переданных в масиив функция, переданная выше, будет выполнена
  );
  return (
    <div className="todo-list">
      <button type="button" onClick={() => setFilter(ToDoFilter.ALL)}>Все</button>
      <button type="button" onClick={() => setFilter(ToDoFilter.NOT_DONE)}>Невыполненные</button>
      <button type="button" onClick={() => setFilter(ToDoFilter.DONE)}>Выполненные</button>
      <ul>
        {filteredCard.map((record, index) => (
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

export default connect(
  (state: State) => ({
    records: getTodoRecords(state),
  }),
  (dispatch) => bindActionCreators(actions, dispatch),
)(ToDo);
