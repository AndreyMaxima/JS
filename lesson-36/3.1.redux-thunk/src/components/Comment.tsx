import React from 'react';
import './Comment.css';

interface Props {
  message?: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
}

const Comment = (props: Props) => {
  const {
    message, firstName, lastName, avatarUrl,
  } = props;
  return (
    <div className="comment">
      <div className="comment__avatar"><img alt="avatar" src={avatarUrl} /></div>
      <div className="comment__content">
        <div className="comment__user-name">{`${firstName} ${lastName}`}</div>
        <div className="comment__message">{message}</div>
      </div>
    </div>
  );
};

export default Comment;
