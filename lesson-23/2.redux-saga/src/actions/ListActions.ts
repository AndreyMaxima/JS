import { ADD_RECORD } from '../constants/actions/list';
import { ListActionType } from '../types/actions';

export const addRecordAction = (newRecord: string): ListActionType => ({
  type: ADD_RECORD,
  newRecord,
});
