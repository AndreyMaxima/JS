import React, { useMemo, useState } from 'react';
import { ToDoFilter } from '../constants/components';
import { ToDoRecord } from '../types/state';

const ToDo = () => {
  const [toDoList, setToDoList] = useState([] as Array<ToDoRecord>);
  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState(ToDoFilter.ALL);
  const handleAddTodo = () => {
    setToDoList([...toDoList, {
      text: inputText,
      done: false,
    }]);
    setInputText('');
  };

  const filteredRecords = useMemo(
    () => {
      switch (filter) {
        case 'done':
          return toDoList.filter((record) => record.done);
        case 'not done':
          return toDoList.filter((record) => !record.done);
        default:
          return toDoList;
      }
    },
    [filter, toDoList],
  );

  const toggleRecordStatus = (index: number) => {
    const newToDoList = [...toDoList];
    newToDoList[index].done = !newToDoList[index].done;
    setToDoList(newToDoList);
  };

  return (
    <div className="todo-list">
      <button type="button" onClick={() => setFilter(ToDoFilter.ALL)}>Все</button>
      <button type="button" onClick={() => setFilter(ToDoFilter.NOT_DONE)}>Невыполненные</button>
      <button type="button" onClick={() => setFilter(ToDoFilter.DONE)}>Выполненные</button>
      <ul>
        {filteredRecords.map((record, index) => (
          <li
            key={index}
            onClick={() => toggleRecordStatus(index)}
            style={{ cursor: 'pointer', textDecoration: record.done ? 'line-through' : 'none' }}
          >
            {record.text}
          </li>
        ))}
      </ul>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button type="button" onClick={handleAddTodo}>Добавить</button>
    </div>
  );
};

export default ToDo;
