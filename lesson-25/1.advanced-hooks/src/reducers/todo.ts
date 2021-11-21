import produce from 'immer';
import { ToDoState } from '../types/state';
import { TodoAction } from '../types/actions';
import { ADD_TODO } from '../constants/actions/todo';

export const initialState: ToDoState = {
  records: [
    {
      text: 'Купить слона',
      done: false,
    },
    {
      text: 'Купить второго слона',
      done: true,
    },
    {
      text: 'Купить третьего слона',
      done: false,
    },
    {
      text: 'Купить четвёртого слона',
      done: true,
    },
  ],
};

const addTodo = (draft: ToDoState, text?: string) => {
  draft.records.push({ text: text || '', done: false });
  return draft;
};

const defaultState: ToDoState = {
  records: [],
};

export const todo = (state = defaultState, action: TodoAction) => produce(state, (draft: ToDoState) => {
  switch (action.type) {
    case ADD_TODO: return addTodo(draft, action.record);
    default: return state;
  }
});
