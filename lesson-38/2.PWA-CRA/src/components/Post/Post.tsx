import React, { useState } from 'react';
import './Post.css';
import LikeButton from '../LikeButton/LikeButton';

interface Props {
  text: string;
}

const Post = ({ text }: Props) => {
  const [liked, setLiked] = useState(false); // Создаёт поле стейта liked со значением false и метод setLiked, менящий значение поля стэйта liked
  return (
    <div className="post">
      <div className="post__text">
        {text}
      </div>
      <div className="post__like">
        <LikeButton setLiked={setLiked} liked={liked} />
      </div>
    </div>
  );
};

export default Post;
