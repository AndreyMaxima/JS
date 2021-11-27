import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filteredTodoListSelector, todoListAtom } from '../../states/todoState';
import TodoFilter from './ToDoFilter';

const ToDo = () => {
  const [toDoList, setToDoList] = useRecoilState(todoListAtom); // Вернуть значение и сеттер из атома
  const [inputText, setInputText] = useState('');
  const filteredRecords = useRecoilValue(filteredTodoListSelector); // Вернуть значение из селектора (или атома)
  const handleAddTodo = () => {
    setToDoList([...toDoList, {
      text: inputText,
      done: false,
    }]);
    setInputText('');
  };
  const toggleRecordStatus = (index: number) => {
    const newToDoList = [...toDoList];
    newToDoList[index] = {
      ...newToDoList[index],
      done: !newToDoList[index].done,
    };
    setToDoList(newToDoList);
  };

  return (
    <div className="todo-list">
      <TodoFilter />
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
