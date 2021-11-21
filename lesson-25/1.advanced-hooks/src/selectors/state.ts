import { State } from '../types/state';

export const getTodo = (state: State) => state.todo;
export const getTodoRecords = (state: State) => state.todo.records;
