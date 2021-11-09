import { CommentType } from './api/dumMyApiResponses';

export interface CommentsState {
  commentList: Array<CommentType>
  isLoading: boolean;
}
