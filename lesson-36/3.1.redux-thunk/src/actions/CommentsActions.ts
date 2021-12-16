import { Dispatch } from 'redux';
import { CommentsAction } from '../types/actions';
import {
  SHOW_LOADING, LOAD_COMMENTS_ERROR, LOAD_COMMENTS_SUCCESS, HIDE_LOADING,
} from '../constants/actions/comments';
import { CommentType } from '../types/api/dumMyApiResponses';
import { getCommentsList } from '../api/dumMyApi';

const loadSuccessAction = (comments: Array<CommentType>): CommentsAction => ({
  type: LOAD_COMMENTS_SUCCESS,
  commentsList: comments,
});

const loadErrorAction = (error: string): CommentsAction => ({
  type: LOAD_COMMENTS_ERROR,
  error,
});

const showLoadingAction = () => ({
  type: SHOW_LOADING,
});

const hideLoadingAction = () => ({
  type: HIDE_LOADING,
});

export const load = (pageNum: number, pageSize: number) => (dispatch: Dispatch) => {
  dispatch(showLoadingAction());
  getCommentsList(pageNum, pageSize)
    .then((resp) => dispatch(loadSuccessAction(resp)))
    .catch((error) => dispatch(loadErrorAction(error)))
    .finally(() => dispatch(hideLoadingAction()));
};
