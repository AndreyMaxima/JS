import React from 'react';
import './LikeButton.css';

interface Props {
  /**
  * Флаг лайка
   */
  liked: boolean;
  /**
  * Коллбек, вызываемый при клике по компоненту
   */
  setLiked: (liked: boolean) => void;
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
