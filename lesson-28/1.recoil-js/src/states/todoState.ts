import {
  atom, RecoilState, RecoilValueReadOnly, selector,
} from 'recoil';
import { ToDoRecord } from '../types/state';
import { ToDoFilter } from '../constants/components';

export const todoListAtom: RecoilState<Array<ToDoRecord>> = atom({
  key: 'TODO/todoList', // Ключ атома (или селектора) должен быть уникальным
  default: [] as Array<ToDoRecord>,
});

export const todoFilterAtom: RecoilState<ToDoFilter> = atom({
  key: 'TODO/todoFilter', // Ключ атома (или селектора) должен быть уникальным
  default: ToDoFilter.ALL as ToDoFilter,
});

export const filteredTodoListSelector: RecoilValueReadOnly<Array<ToDoRecord>> = selector({
  key: 'TODO/filteredTodoList',
  get: ({ get }) => {
    const filter = get(todoFilterAtom);
    const toDoList = get(todoListAtom);
    switch (filter) {
      case ToDoFilter.DONE:
        return toDoList.filter((record) => record.done);
      case ToDoFilter.NOT_DONE:
        return toDoList.filter((record) => !record.done);
      default:
        return toDoList;
    }
  },
});
