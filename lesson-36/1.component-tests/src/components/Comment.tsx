import React, { useState } from 'react';
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

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="comment">
      <div className="comment_avatar"><img alt="avatar" src={avatarUrl} /></div>
      <div className="comment_content">
        <div className="comment_user-name">{`${firstName || ''} ${lastName || ''}`}</div>
        <div className="comment_message">{message || ''}</div>
      </div>
      <div className="comment_like" onClick={handleLike}>{liked ? 'лайкнуто' : 'не лайкнуто'}</div>
    </div>
  );
};

export default Comment;
