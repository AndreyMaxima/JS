import React, { useState } from 'react';
import './Comment.css';
import { Link } from 'react-router-dom';
import LikeButton from '../LikeButton/LikeButton';
import { EMPTY_STRING } from '../../constants/common';

interface Props {
  userId?: string;
  name?: string;
  text?: string;
  className?: string;
}

const Comment = ({
  name,
  text,
  className,
  userId,
}: Props) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={`comment ${className}`}>
      <div className="comment__user-name">{name}</div>
      <Link to={`/user/${userId}`}>Перейти к профилю</Link>
      <div
        className={`comment__text ${liked && 'text-liked'}`}
      >
        {text}
      </div>
      <div className="comment__like">
        <LikeButton liked={liked} setLiked={handleLike} />
      </div>
    </div>
  );
};

Comment.defaultProps = {
  userId: 0,
  name: 'Незнакомец',
  text: '-',
  className: EMPTY_STRING,
};

export default Comment;
