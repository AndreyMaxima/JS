import { TodoAction } from '../types/actions';
import { ADD_TODO } from '../constants/actions/todo';

export const addTodo = (text: string): TodoAction => ({
  type: ADD_TODO,
  record: text,
});
