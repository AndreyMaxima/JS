import { Action, ListActionPayload } from '../types/actions';
import { ListState } from '../types/commonState';
import {ADD_RECORD} from "../constants/actions/list";

const initialState: ListState = {
  records: ['First record', 'Second record'],
};

function listReducer(state = initialState, action: Action<ListActionPayload>) { // Reducer - функция, принимающая текущий стейт, возвраящуя новый (с новой ссылкой)
  switch (action.type) {
    case ADD_RECORD: state.records.push(action.payload.newRecord);
  }
  return state;
}

export default listReducer;
