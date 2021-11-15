import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../types/state';
import { CommentType } from '../types/api/dumMyApiResponses';
import { loadAction } from '../actions/CommentsActions';

interface Props {
  commentsList: Array<CommentType>
  loading: boolean;
  load: () => void;
  error: any;
}

const Comments = ({
  commentsList, loading, load, error,
}: Props) => {
  useEffect(() => {
    load();
  }, []);
  return (
    <div className="comments">
      {/* eslint-disable-next-line no-nested-ternary */}
      {error ? <div>{error}</div> : loading ? 'загрузка' : commentsList?.map((elem, index) => <div key={index}>{elem.message}</div>)}
    </div>
  );
};

export default connect(
  (state: State) => ({
    commentsList: state.comments.commentsList,
    loading: state.comments.loading,
    error: state.comments.error,
  }),
  (dispatch) => ({
    load: bindActionCreators(loadAction, dispatch),
  }),
)(Comments);
