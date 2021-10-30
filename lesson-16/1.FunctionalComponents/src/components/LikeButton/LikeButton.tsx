import React from 'react';
import './LikeButton.css';

interface Props {
  setLiked: (liked: boolean) => void;
  liked: boolean;
}

export default class LikeButton extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    this.props.setLiked(!this.props.liked);
  }

  render() {
    return (
      <div className="like-button" onClick={this.handleLike}>
        {this.props.liked ? 'Лайкнуто' : 'Не лайкнуто'}
      </div>
    );
  }
}
