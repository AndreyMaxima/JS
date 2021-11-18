import { CommentType } from './api/dumMyApiResponses';

export interface Action {
  type: string
}

export interface ListActionType extends Action{
  newRecord?: string
}

export interface CommentsAction extends Action{
  commentsList?: Array<CommentType>
  loading?: boolean
  error?: string
}

export interface PostAction extends Action {
  text?: string;
}
