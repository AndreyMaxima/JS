import produce from 'immer';
import { ToDoState } from '../types/state';
import { TodoAction } from '../types/actions';
import { ADD_TODO, CHANGE_FILTER } from '../constants/actions/todo';

const initialState: ToDoState = {
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
  filter: 'not done',
};

const addTodo = (draft: ToDoState, text?: string) => {
  draft.records.push({ text: text || '', done: false });
  return draft;
};

const changeFilter = (draft: ToDoState, filter?: string) => {
  draft.filter = filter || 'not done';
  return draft;
};

export const todo = (state = initialState, action: TodoAction) => produce(state, (draft: ToDoState) => {
  switch (action.type) {
    case ADD_TODO: return addTodo(draft, action.record);
    case CHANGE_FILTER: return changeFilter(draft, action.filter);
    default: return state;
  }
});
