/* eslint-disable */
import {Action} from "../types/actions";
import {State} from "../types/state";

const initialState: State = {
  records: ['First record', 'Second record'],
};

function listReducer(state = initialState, action: Action) {
  return state;
}

export default listReducer;
