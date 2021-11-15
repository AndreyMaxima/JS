import produce from 'immer';
import { ListActionType } from '../types/actions';
import { ADD_RECORD } from '../constants/actions/list';
import { ListState } from '../types/state';

// ------------------------С использованием встроенных инструментов иммутабельности----------------
// const initialState: ListState = Immutable.Map({
//   records: ['First record', 'Second record'],
// });
// const addRecords = (state: ListState, newRecord?: string) => (newRecord ? {
//   ...state,
//   records: [...state.records, newRecord],
// } : state);
//
// function listReducer(state = initialState, action: ListActionType) { // Reducer - функция, принимающая текущий стейт, возвраящуя новый (с новой ссылкой)
//   switch (action.type) {
//     case ADD_RECORD:
//       return addRecords(state, action.newRecord);
//     default:
//       return state;
//   }
// }

// ------------------------С использованием Immutable.js----------------
// const initialState: any = Immutable.fromJS({
//   records: ['First record', 'Second record'],
// });
// function listReducer(state = initialState, action: ListActionType) { // Reducer - функция, принимающая текущий стейт, возвраящуя новый (с новой ссылкой)
//   switch (action.type) {
//     case ADD_RECORD:
//       return state.updateIn(['records'], (records: any) => records.push(action.newRecord));
//     default:
//       return state;
//   }
// }

const initialState: ListState = {
  records: ['First record', 'Second record'],
};

const addRecords = (draft: ListState, newRecord?: string) => {
  newRecord && draft.records.push(newRecord);
  return draft;
};

const listReducer = (state = initialState, action: ListActionType) => produce(state, (draft:ListState) => {
  switch (action.type) {
    case ADD_RECORD:
      return addRecords(draft, action.newRecord);
    default:
      return state;
  }
});

export default listReducer;
