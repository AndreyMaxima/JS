import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../types/state';
import { CommentType } from '../types/api/dumMyApiResponses';
import * as actions from '../actions/CommentsActions';

interface Props {
  commentsList: Array<CommentType>
  loading: boolean;
  error: any;
  load: (pageNum: number, pageSize: number) => void;
}

const Comments = ({
  commentsList, loading, error, load,
}: Props) => {
  useEffect(() => {
    load(0, 10);
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
  (dispatch) => bindActionCreators(actions, dispatch),
)(Comments);
