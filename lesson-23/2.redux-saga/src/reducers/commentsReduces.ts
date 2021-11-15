import produce from 'immer';
import { CommentsState } from '../types/state';
import { CommentsAction } from '../types/actions';
import { LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS } from '../constants/actions/comments';
import { CommentType } from '../types/api/dumMyApiResponses';

const initialState: CommentsState = {
  commentsList: [],
  loading: false,
};

const load = (draft: CommentsState) => {
  draft.loading = true;
  return draft;
};

const loadSuccess = (draft: CommentsState, resp?: Array<CommentType>) => {
  draft.commentsList = resp || [];
  draft.loading = false;
  return draft;
};

export default (state = initialState, action: CommentsAction) => produce(
  state,
  (draft: CommentsState) => {
    switch (action.type) {
      case LOAD_COMMENTS: return load(draft);
      case LOAD_COMMENTS_SUCCESS: return loadSuccess(draft, action.commentsList);
      default: return state;
    }
  },
);
