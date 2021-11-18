import produce from 'immer';
import { PostState } from '../types/state';
import { PostAction } from '../types/actions';
import { HIDE_LOADER, LOAD_POST_SUCCESS, SHOW_LOADER } from '../constants/actions/post';

const initialState: PostState = {
  loading: false,
  text: '',
};

const showLoader = (draft: PostState) => {
  draft.loading = true;
  return draft;
};

const hideLoader = (draft: PostState) => {
  draft.loading = false;
  return draft;
};

const loadPostSuccess = (draft: PostState, text?: string) => {
  draft.text = text || '';
  return draft;
};

const post = (state = initialState, action: PostAction) => produce(state, (draft: PostState) => {
  switch (action.type) {
    case SHOW_LOADER: return showLoader(draft);
    case HIDE_LOADER: return hideLoader(draft);
    case LOAD_POST_SUCCESS: return loadPostSuccess(draft, action.text);
    default: return state;
  }
});

export default post;
