import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../types/state';
import { CommentType } from '../types/api/dumMyApiResponses';
import { loadAction, loadSuccessAction } from '../actions/CommentsActions';
import { getCommentsList } from '../api/dumMyApi';

interface Props {
  commentsList: Array<CommentType>
  loading: boolean
  load: () => void;
  loadSuccess: (resp: Array<CommentType>) => void;
}

const Comments = ({
  commentsList, loading, load, loadSuccess,
}: Props) => {
  useEffect(() => {
    load();
    getCommentsList(0, 10)
      .then((response) => loadSuccess(response));
  }, []);
  return (
    <div className="comments">
      {loading ? 'загрузка' : commentsList?.map((elem, index) => <div key={index}>{elem.message}</div>)}
    </div>
  );
};

export default connect(
  (state: State) => ({
    commentsList: state.comments.commentsList,
    loading: state.comments.loading,
  }),
  (dispatch) => ({
    load: bindActionCreators(loadAction, dispatch),
    loadSuccess: bindActionCreators(loadSuccessAction, dispatch),
  }),
)(Comments);
