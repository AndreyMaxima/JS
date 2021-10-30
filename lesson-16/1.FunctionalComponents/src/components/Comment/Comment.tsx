import React, { useEffect, useState } from 'react';
import './Comment.css';
import LikeButton from '../LikeButton/LikeButton';
import { EMPTY_STRING } from '../../constants/common';

interface Props {
  name?: string;
  text?: string;
  className?: string;
  commentIndex?: number;
}

const Comment = ({
  name,
  text,
  className,
  commentIndex,
}: Props) => {
  useEffect(() => {
    console.log(`Комментарий ${commentIndex} отображён`);
    return () => console.log(`Комментарий ${commentIndex} скрыт`); // Будет выполнено, по аналогии с componentWillUnmount
  }, []);

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={`comment ${className}`}>
      <div className="comment__user-name">{name}</div>
      <div
        className={`comment__text ${liked && 'text-liked'}`}
      >
        {text || '-'}
      </div>
      <div className="comment__like">
        <LikeButton liked={liked} setLiked={handleLike} />
      </div>
    </div>
  );
};

Comment.defaultProps = {
  name: 'Незнакомец',
  text: '-',
  className: EMPTY_STRING,
  commentIndex: -1,
};

export default Comment;
