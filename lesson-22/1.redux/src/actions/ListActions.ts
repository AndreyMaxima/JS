import { ADD_RECORD } from '../constants/actions/list';

export const addRecordAction = (newRecord: string) => ({
  type: ADD_RECORD,
  payload: newRecord,
});
