import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../types/state';
import { CommentType } from '../types/api/dumMyApiResponses';
import * as actions from '../actions/CommentsActions';
import Comment from '../components/Comment';
import './CommentsList.css';

interface Props {
  commentsList: Array<CommentType>
  loading: boolean;
  error: any;
  load: (pageNum: number, pageSize: number) => void;
}

const CommentsList = ({
  commentsList, loading, error, load,
}: Props) => {
  useEffect(() => {
    load(5, 10);
  }, []);
  return (
    <div className="comments-list">
      {/* eslint-disable-next-line no-nested-ternary */}
      {error ? <div>{error}</div> : loading ? 'загрузка' : commentsList?.map(({ message, owner }, index) => (
        <Comment
          key={index}
          message={message}
          avatarUrl={owner?.picture}
          firstName={owner?.firstName}
          lastName={owner?.lastName}
        />
      ))}
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
)(CommentsList);
