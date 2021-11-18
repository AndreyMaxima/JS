import { CommentType } from './api/dumMyApiResponses';

export interface State {
  comments: CommentsState
  post: PostState
}

export interface CommentsState {
  commentsList: Array<CommentType>
  loading: boolean
  error?: string
}

export interface PostState {
  text: string;
  loading: boolean;
}
