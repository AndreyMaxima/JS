import { Dispatch } from 'redux';
import { PostAction } from '../types/actions';
import { HIDE_LOADER, LOAD_POST_SUCCESS, SHOW_LOADER } from '../constants/actions/post';
import { getFishText } from '../api/fishText';

const showLoader = (): PostAction => ({
  type: SHOW_LOADER,
});

const hideLoader = (): PostAction => ({
  type: HIDE_LOADER,
});

const loadPostSuccess = (text: string) => ({
  type: LOAD_POST_SUCCESS,
  text,
});

export const loadPost = () => (dispatch: Dispatch) => {
  dispatch(showLoader());
  getFishText()
    .then((response) => dispatch(loadPostSuccess(response.text)))
    .finally(() => dispatch(hideLoader()));
};
