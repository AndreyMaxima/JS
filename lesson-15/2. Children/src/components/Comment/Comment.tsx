import React, { RefObject } from 'react';
import './Comment.css';

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
        <div className="comment__like" onClick={this.handleLike}>
          {this.state.liked ? 'Лайкнуто' : 'Не лайкнуто'}
        </div>
      </div>
    );
  }
}
