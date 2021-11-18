import produce from 'immer';
import { CommentsState } from '../types/state';
import { CommentsAction } from '../types/actions';
import {
  SHOW_LOADING, LOAD_COMMENTS_ERROR, LOAD_COMMENTS_SUCCESS, HIDE_LOADING,
} from '../constants/actions/comments';
import { CommentType } from '../types/api/dumMyApiResponses';
import { EMPTY_STRING } from '../constants/common';

const initialState: CommentsState = {
  commentsList: [],
  loading: false,
  error: EMPTY_STRING,
};

const showLoading = (draft: CommentsState) => {
  draft.loading = true;
  return draft;
};

const hideLoading = (draft: CommentsState) => {
  draft.loading = false;
  return draft;
};

const loadSuccess = (draft: CommentsState, resp?: Array<CommentType>) => {
  draft.commentsList = resp || [];
  return draft;
};
const loadError = (draft: CommentsState, e?: any) => {
  draft.loading = false;
  draft.error = e;
  return draft;
};

export default (state = initialState, action: CommentsAction) => produce(
  state,
  (draft: CommentsState) => {
    switch (action.type) {
      case SHOW_LOADING: return showLoading(draft);
      case HIDE_LOADING: return hideLoading(draft);
      case LOAD_COMMENTS_SUCCESS: return loadSuccess(draft, action.commentsList);
      case LOAD_COMMENTS_ERROR: return loadError(draft, action.error);
      default: return state;
    }
  },
);
