import React from 'react';
import './Post.css';
import LikeButton from '../LikeButton/LikeButton';

interface Props {
  text: string;
}

interface State {
  liked: boolean;
}

export default class Post extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { liked: false };
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    return (
      <div className="post">
        <div className="post__text">
          {this.props.text}
        </div>
        <div className="post__like">
          <LikeButton setLiked={this.handleLike} liked={this.state.liked} />
        </div>
      </div>
    );
  }
}
