import React from 'react';
import { useSetRecoilState } from 'recoil';
import { ToDoFilter } from '../../constants/components';
import { todoFilterAtom } from '../../states/todoState';

const TodoFilter = () => {
  const setFilter = useSetRecoilState(todoFilterAtom); // Получение сеттера для атома
  return (
    <div className="todo-list__filter">
      <button type="button" onClick={() => setFilter(ToDoFilter.ALL)}>Все</button>
      <button type="button" onClick={() => setFilter(ToDoFilter.NOT_DONE)}>Невыполненные</button>
      <button type="button" onClick={() => setFilter(ToDoFilter.DONE)}>Выполненные</button>
    </div>
  );
};

export default TodoFilter;
