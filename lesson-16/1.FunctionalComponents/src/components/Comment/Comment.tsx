import React, { RefObject } from 'react';
import './Comment.css';
import LikeButton from '../LikeButton/LikeButton';

interface Props {
  name?: string;
  text?: string;
  addLike?: () => void;
  removeLike?: () => void;
  className?: string;
}

interface State {
  liked: boolean
}

export default class Comment extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.state = { liked: false };
    this.textDiv = React.createRef();
  }

  handleLike() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  textDiv: RefObject<HTMLDivElement>;

  render() {
    return (
      <div className={`comment ${this.props.className}`}>
        <div className="comment__user-name">{this.props.name || 'Незнакомец'}</div>
        <div
          ref={this.textDiv}
          className={`comment__text ${this.state.liked && 'text-liked'}`}
        >
          {this.props.text || '-'}
        </div>
        <div className="comment__like">
          <LikeButton liked={this.state.liked} setLiked={this.handleLike} />
        </div>
      </div>
    );
  }
}
