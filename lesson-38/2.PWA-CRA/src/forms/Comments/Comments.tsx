import React, { useEffect, useState } from 'react';
import './Comments.css';
import { Prompt } from 'react-router';
import Comment from '../../components/Comment/Comment';
import { CommentType } from '../../types/dumMyApiResponses';
import Post from '../../components/Post/Post';
import { getCommentsList } from '../../api/dumMyApi';
import { ThemeContext, ThemeContextState } from '../../contexts/ThemeContext';
import { EMPTY_STRING } from '../../constants/common';
import { getFishText } from '../../api/fishText';
import ComponentWithHelper from '../../wrappers/ComponentWithHelper';

const renderPost = (post: string) => (
  <ComponentWithHelper comment="Рандомный текст">
    <div className="comments-form__post">
      <Post text={post} />
    </div>
  </ComponentWithHelper>
);

const renderComments = (showComments: boolean, handleShowCommentButton: ()=>void, commentsLoaded: boolean, comments: Array<CommentType>, darkTheme?: boolean) => (
  <div>
    <button
      type="button"
      className="comments-form__show-comment-button"
      onClick={handleShowCommentButton}
    >
      {showComments ? 'Скрыть комментарии' : 'Показать комментарии'}
    </button>
    {showComments && (commentsLoaded ? (
      <div className="comments-form__comments">
        {comments.length !== 0
          ? comments.map((elem: CommentType, index: number) => (
            <Comment
              userId={elem.owner?.id}
              key={index}
              name={elem.owner?.firstName}
              text={elem.message}
              className={darkTheme ? 'comment_dark' : ''}
            />
          ))
          : 'Комеентарии не найдены или при загрузке произошла ошибка'}
      </div>
    ) : 'Идёт загрузка')}
  </div>
);

const Comments = () => {
  const [comments, setComments] = useState([] as Array<CommentType>);
  const [post, setPost] = useState(EMPTY_STRING);
  const [commentsLoaded, setCommentsLoaded] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const loadComments = (page: number, limit: number) => {
    getCommentsList(
      page,
      limit,
      (resp: Array<CommentType>) => {
        setComments(resp);
        setCommentsLoaded(true);
      },
      () => setCommentsLoaded(true),
    );
  };

  const loadPost = () => {
    getFishText(setPost);
  };

  useEffect(() => {
    loadComments(0, 5);
    loadPost();
  }, []);

  const handleShowCommentButton = () => {
    setShowComments(!showComments);
  };
  return (
    <ThemeContext.Consumer>
      {
        (context: Partial<ThemeContextState>) => (
          <div className="comments-form">
            {renderPost(post)}
            {renderComments(showComments, handleShowCommentButton, commentsLoaded, comments, context.darkTheme)}
            {/* Подтверждение ухода со страницы */}
            <Prompt
              message={() => { /* Функция или строка для propmpt, срабатывающая при попытке перехода на другой роут */
                alert('Жаль, что вам наскучили комментарии(');
                return true;
              }}
              when={showComments /* Функция, возвращающая булево значение или булево значение, указывающее на необходимость отображения подтверждения */}
            />
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
};

export default Comments;
