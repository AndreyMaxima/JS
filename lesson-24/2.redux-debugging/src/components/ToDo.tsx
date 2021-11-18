import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State, ToDoRecord } from '../types/state';
import * as actions from '../actions/todo';
import { getFilterRecords } from '../selectors/todo';

interface Props {
  records: Array<ToDoRecord>
  addTodo: (text: string) => void
  changeFilter: (filter: string) => void
}

const ToDo = ({ records, addTodo, changeFilter }: Props) => {
  const [inputText, setInputText] = useState('');
  const handleAddTodo = () => {
    addTodo(inputText);
    setInputText('');
  };

  return (
    <div className="todo-list">
      <button type="button" onClick={() => changeFilter('all')}>Все</button>
      <button type="button" onClick={() => changeFilter('not done')}>Невыполненные</button>
      <button type="button" onClick={() => changeFilter('done')}>Выполненные</button>
      <ul>
        {records.map((record, index) => (
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
    records: getFilterRecords(state),
  }),
  (dispatch) => bindActionCreators(actions, dispatch),
)(ToDo);
