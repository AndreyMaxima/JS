import React from 'react';
import './Comments.css';
import { apiResponse } from '../../api-mock/api';
import Comment from '../../components/Comment/Comment';
import { CommentResponse, CommentType } from '../../types/responses';
import LikeCounter from '../../components/LikeCounter/LikeCounter';
import ComponentWithHelper from '../../wrappers/ComponentWithHelper';

interface State {
  commentsResponse: CommentResponse;
  countOfLikes: number;
}

export default class Comments extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { commentsResponse: apiResponse, countOfLikes: 0 };
    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
  }

  addLike() {
    this.setState({ countOfLikes: this.state.countOfLikes + 1 });
  }

  removeLike() {
    this.setState({ countOfLikes: this.state.countOfLikes - 1 });
  }

  render() {
    return (
      <div className="comments-form">
        {this.state.commentsResponse.status === 'ok'
          ? this.state.commentsResponse.result.map((elem: CommentType, index: number) => (
            <ComponentWithHelper comment="Это комментарий" key={index}>
              {/* Компонент ниже попадёт в props.children компонента ComponentWithHelper */}
              <Comment
                name={elem.name}
                text={elem.text}
                addLike={this.addLike}
                removeLike={this.removeLike}
              />
            </ComponentWithHelper>
          ))
          : 'При загрузке произошла ошибка'}
        <LikeCounter countOfLikes={this.state.countOfLikes} />
      </div>
    );
  }
}
