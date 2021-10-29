import React, { RefObject } from 'react';
import './Comment.css';
import LikeButton from '../LikeButton/LikeButton';

interface Props {
  name?: string;
  text?: string;
  addLike?: () => void;
  removeLike?: () => void;
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

  componentWillUnmount(): void {
    console.log('Комментарий размонтирован');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleLike(e: any) {
    !this.state.liked
      ? this.props.addLike && this.props.addLike()
      : this.props.removeLike && this.props.removeLike();
    this.setState({
      liked: !this.state.liked,
    });
  }

  textDiv: RefObject<HTMLDivElement>;

  render() {
    return (
      <div className="comment">
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
