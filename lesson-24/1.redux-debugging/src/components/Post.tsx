import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { useEffect } from 'react';
import { State } from '../types/state';
import * as actions from '../actions/PostActions';

interface Props {
  loading: boolean;
  text: string;
  loadPost: () => void;
}

const Post = ({ loading, text, loadPost }: Props) => {
  useEffect(loadPost, []);
  return <div className="post">{loading ? 'загрузка поста' : text}</div>;
};

export default connect(
  (state: State) => ({ ...state.post }),
  (dispatch) => bindActionCreators(actions, dispatch),
)(Post);
