import { ADD_RECORD } from '../constants/actions/list';
import dispatcher from '../dispatcher';

export const addRecordAction = (text: string) => (
  dispatcher.dispatch({ // Отправить action в диспетчер
    type: ADD_RECORD,
    payload: text,
  })
);
