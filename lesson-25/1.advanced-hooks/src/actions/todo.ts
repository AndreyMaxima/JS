import { TodoAction } from '../types/actions';
import { ADD_TODO, CHANGE_FILTER } from '../constants/actions/todo';

export const addTodo = (text: string): TodoAction => ({
  type: ADD_TODO,
  record: text,
});

export const changeFilter = (filter: string): TodoAction => ({
  type: CHANGE_FILTER,
  filter,
});
