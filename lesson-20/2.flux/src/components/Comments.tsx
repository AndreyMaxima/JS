import React from 'react';
import { CommentType } from '../types/api/dumMyApiResponses';

interface Props {
  commentList?: Array<CommentType>
  isLoading?: boolean
}

const Comments = ({ commentList, isLoading }: Props) => (
  <div className="comments">
    {isLoading ? 'загрузка' : commentList?.map((elem, index) => <div key={index}>{elem.message}</div>)}
  </div>
);

Comments.defaultProps = {
  commentList: [],
  isLoading: false,
};

export default Comments;
