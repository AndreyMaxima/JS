import { createSelector } from 'reselect';
import { ToDoRecord } from '../types/state';
import { getTodoFilter, getTodoRecords } from './state';

export const getFilterRecords = createSelector(
  [getTodoRecords, getTodoFilter],
  (unfiltredRecords: Array<ToDoRecord>, actualFilter: string) => {
    console.log('record filter');
    switch (actualFilter) {
      case 'done': return unfiltredRecords.filter((record) => record.done);
      case 'not done': return unfiltredRecords.filter((record) => !record.done);
      default: return unfiltredRecords;
    }
  },
  {
    memoizeOptions: {
      maxSize: 3,
    },
  },
);
