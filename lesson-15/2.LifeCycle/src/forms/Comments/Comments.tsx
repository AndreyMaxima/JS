import React from 'react';
import './Comments.css';
import Comment from '../../components/Comment/Comment';
import { CommentType } from '../../types/dumMyApiResponses';
import LikeCounter from '../../components/LikeCounter/LikeCounter';
import ComponentWithHelper from '../../wrappers/ComponentWithHelper';
import Post from '../../components/Post/Post';
import { getCommentsList } from '../../api/dumMyApi';

interface State {
  comments: Array<CommentType>;
  countOfLikes: number;
  showComments: boolean;
}

const initialState = {
  comments: [],
  countOfLikes: 0,
  showComments: true,
};

export default class Comments extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = initialState;
    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
    this.handleShowCommentButton = this.handleShowCommentButton.bind(this);
    this.loadComments = this.loadComments.bind(this);
  }

  componentDidMount(): void {
    this.loadComments(0, 10);
  }

  handleShowCommentButton() {
    this.setState({ showComments: !this.state.showComments });
  }

  loadComments(page: number, limit: number) {
    getCommentsList(page, limit, (resp: Array<CommentType>) => this.setState({ comments: resp }));
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
        <div className="comments-form__post">
          <Post text="Какой-то пост" />
        </div>
        <button
          type="button"
          className="comments-form__show-comment-button"
          onClick={this.handleShowCommentButton}
        >
          {this.state.showComments ? 'Скрыть комментарии' : 'Показать комментарии'}
        </button>
        {this.state.showComments && (
        <div className="comments-form__comments">
          {this.state.comments.length !== 0
            ? this.state.comments.map((elem: CommentType, index: number) => (
              <ComponentWithHelper comment="Это комментарий" key={index}>
                {/* Компонент ниже попадёт в props.children компонента ComponentWithHelper */}
                <Comment
                  name={elem.owner?.firstName}
                  text={elem.message}
                  addLike={this.addLike}
                  removeLike={this.removeLike}
                />
              </ComponentWithHelper>
            ))
            : 'При загрузке произошла ошибка'}
          <LikeCounter countOfLikes={this.state.countOfLikes} />
        </div>
        )}
      </div>
    );
  }
}
