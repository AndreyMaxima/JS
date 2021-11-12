import Immutable from 'immutable';
import { ListActionType } from '../types/actions';
import { ADD_RECORD } from '../constants/actions/list';

const initialState: any = Immutable.Map({
  records: ['First record', 'Second record'],
});

// ------------------------С использованием встроенных инструментов иммутабельности----------------
// const initialState: ListState = Immutable.Map({
//   records: ['First record', 'Second record'],
// });
// const addRecords = (state: ListState, newRecord?: string) => (newRecord ? {
//   ...state,
//   list: [...state.records, newRecord],
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
function listReducer(state = initialState, action: ListActionType) { // Reducer - функция, принимающая текущий стейт, возвраящуя новый (с новой ссылкой)
  switch (action.type) {
    case ADD_RECORD:
      return addRecords(state, action.newRecord);
    default:
      return state;
  }
}

export default listReducer;
