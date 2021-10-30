import React from 'react';
import './LikeButton.css';

interface Props {
  setLiked: (liked: boolean) => void;
  liked: boolean;
}

const LikeButton = ({ setLiked, liked }: Props) => {
  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="like-button" onClick={handleLike}>
      {liked ? 'Лайкнуто' : 'Не лайкнуто'}
    </div>
  );
};

export default LikeButton;
