import React, { useEffect, useState } from 'react';
import './Comments.css';
import Comment from '../../components/Comment/Comment';
import { CommentType } from '../../types/dumMyApiResponses';
import Post from '../../components/Post/Post';
import { getCommentsList } from '../../api/dumMyApi';
import { ThemeContext, ThemeContextState } from '../../contexts/ThemeContext';
import { EMPTY_STRING } from '../../constants/common';
import { getFishText } from '../../api/fishText';
import ComponentWithHelper from '../../wrappers/ComponentWithHelper';
import useOnceOnMount from '../../hooks/useOnceOnMount';
import useCount from '../../hooks/useCounter';

const Comments = () => {
  const [comments, setComments] = useState([] as Array<CommentType>);
  const [post, setPost] = useState(EMPTY_STRING);
  const [commentsLoaded, setCommentsLoaded] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [ commentClickCounter, addCommentClickCounter ] = useCount(0);
  const [ postClickCounter, addPostClickCounter ] = useCount(0);

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

  // useEffect(() => { // Похож на componentDidMount, componentDidUpdate
  //   loadComments(0, 10);
  //   loadPost();
  // });

  // useLayoutEffect(() => console.log('any), [value1, value2]) // То же что и seEffect, только запускается стинхронно

  // useEffect(() => { // Похож на componentDidMount
  //   loadComments(0, 10);
  //   loadPost();
  //   return () => console.log('Форма размонтирована'); // Будет выполнено, по аналогии с componentWillUnmount
  // }, []);

  useOnceOnMount(() => {
    loadComments(0, 10);
    loadPost();
    console.log('Я хук, заменяющий componentDidMount через useEffect');
  });

  useEffect(() => { // Выполнится при изменении значений, переданных, как элемент массива, во втором параметре
    console.log(showComments ? 'Комментарии показаны' : 'Комментарии скрыты');
  }, [showComments]);

  useEffect(() => {
    console.log('comments или commentsLoaded изменил значение');
  }, [comments, commentsLoaded]);

  const handleShowCommentButton = () => {
    setShowComments(!showComments);
    addCommentClickCounter();
  };
  return (
    <ThemeContext.Consumer>
      {
        (context: Partial<ThemeContextState>) => (
          <div className="comments-form">
            <ComponentWithHelper comment={`Рандомный текст, по которому кликнули ${postClickCounter} раз`}>
              <div className="comments-form__post" onClick={addPostClickCounter}>
                <Post text={post} />
              </div>
            </ComponentWithHelper>
            {`На кнопку ниже нажали ${commentClickCounter} раз`}
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
                      key={index}
                      commentIndex={index}
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
    </ThemeContext.Consumer>
  );
};

export default Comments;
