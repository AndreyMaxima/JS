import React from 'react';
import './Comments.css';
import Comment from '../../components/Comment/Comment';
import { CommentType } from '../../types/dumMyApiResponses';
import Post from '../../components/Post/Post';
import { getCommentsList } from '../../api/dumMyApi';
import { ThemeContextConsumer, ThemeContextState } from '../../contexts/ThemeContext';
import { EMPTY_STRING } from '../../constants/common';
import { getFishText } from '../../api/fishText';
import ComponentWithHelper from '../../wrappers/ComponentWithHelper';

interface State {
  comments: Array<CommentType>;
  commentsLoaded: boolean;
  post: string;
  countOfLikes: number;
  showComments: boolean;
}

const initialState = {
  comments: [],
  post: EMPTY_STRING,
  commentsLoaded: false,
  countOfLikes: 0,
  showComments: true,
};

export default class Comments extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = initialState;
    this.handleShowCommentButton = this.handleShowCommentButton.bind(this);
    this.loadComments = this.loadComments.bind(this);
    this.loadPost = this.loadPost.bind(this);
  }

  componentDidMount(): void {
    this.loadComments(0, 10);
    this.loadPost();
  }

  handleShowCommentButton() {
    this.setState({ showComments: !this.state.showComments });
  }

  loadComments(page: number, limit: number) {
    getCommentsList(
      page,
      limit,
      (resp: Array<CommentType>) => this.setState({ comments: resp, commentsLoaded: true }),
      () => this.setState({ commentsLoaded: true }),
    );
  }

  loadPost() {
    getFishText((post) => this.setState({ post }));
  }

  render() {
    return (
      <ThemeContextConsumer>
        {
          (context: Partial<ThemeContextState>) => (
            <div className="comments-form">
              <ComponentWithHelper comment="Рандомный текст">
                <div className="comments-form__post">
                  <Post text={this.state.post} />
                </div>
              </ComponentWithHelper>
              <button
                type="button"
                className="comments-form__show-comment-button"
                onClick={this.handleShowCommentButton}
              >
                {this.state.showComments ? 'Скрыть комментарии' : 'Показать комментарии'}
              </button>
              {this.state.showComments && (this.state.commentsLoaded ? (
                <div className="comments-form__comments">
                  {this.state.comments.length !== 0
                    ? this.state.comments.map((elem: CommentType, index: number) => (
                      <Comment
                        key={index}
                        name={elem.owner?.firstName}
                        text={elem.message}
                        className={context.darkTheme ? 'comment_dark' : ''}
                      />
                    ))
                    : 'Комеентарии не найдены или при загрузке произошла ошибка'}
                </div>
              ) : 'Идёт загрузка')}
            </div>
          )
        }
      </ThemeContextConsumer>
    );
  }
}
