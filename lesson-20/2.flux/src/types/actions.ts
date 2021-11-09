import {CommentType} from "./api/dumMyApiResponses";

export interface ActionType {
  type: string;
}

export interface AddRecordActionType extends ActionType {
  payload: string;
}

export interface LoadCommentActionType extends ActionType {
  payload: Array<CommentType>;
}
