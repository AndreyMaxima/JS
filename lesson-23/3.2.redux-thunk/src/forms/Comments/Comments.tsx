import React, { useEffect, useState } from 'react';
import './Comments.css';
import { Prompt } from 'react-router';
import { Comment, Pagination } from 'antd';
import { CommentType } from '../../types/dumMyApiResponses';
import Post from '../../components/Post/Post';
import { getCommentsList, getCommentsTotalCount } from '../../api/dumMyApi';
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

const renderComments = (
  showComments: boolean,
  handleShowCommentButton: ()=>void,
  commentsLoaded: boolean,
  loadComments: (page: number, limit: number) => void,
  commentsTotalCount: number,
  comments: Array<CommentType>,
  page: number,
  pageSize: number,
  handleChangePage: (page: number, pageSize?: number) => void,
  darkTheme?: boolean,
) => (
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
            <div className={darkTheme ? 'comment_dark' : 'comment'}>
              <Comment
                avatar={elem.owner?.picture}
                author={elem.owner?.firstName}
                content={elem.message}
                key={index}
                datetime={<span>{elem.publishDate}</span>}
              />
            </div>
          ))
          : 'Коментарии не найдены или при загрузке произошла ошибка'}
        <Pagination
          total={commentsTotalCount}
          pageSize={pageSize}
          current={page + 1}
          pageSizeOptions={['5', '10', '25', '50']}
          onChange={(newPage, newPageSize) => handleChangePage(newPage - 1, newPageSize)}
        />
      </div>
    ) : 'Идёт загрузка')}
  </div>
);

const Comments = () => {
  const [comments, setComments] = useState([] as Array<CommentType>);
  const [commentsTotal, setCommentsTotal] = useState(0);
  const [post, setPost] = useState(EMPTY_STRING);
  const [commentsLoaded, setCommentsLoaded] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const loadComments = (newPage: number, limit: number) => {
    setCommentsLoaded(false);
    getCommentsList(
      newPage,
      limit,
      (resp: Array<CommentType>) => {
        setComments(resp);
        setCommentsLoaded(true);
      },
      () => {},
      () => setCommentsLoaded(true),
    );
  };

  const loadPost = () => {
    getFishText(setPost);
  };

  const loadCommentsTotalCount = () => {
    getCommentsTotalCount(setCommentsTotal);
  };

  const handleChangePage = (newPage: number, newPageSize?: number) => {
    loadComments(newPage, newPageSize || pageSize);
    setPage(newPage);
    newPageSize && setPageSize(newPageSize);
  };

  useEffect(() => {
    loadCommentsTotalCount();
    loadComments(page, pageSize);
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
            {renderComments(
              showComments,
              handleShowCommentButton,
              commentsLoaded,
              loadComments,
              commentsTotal,
              comments,
              page,
              pageSize,
              handleChangePage,
              context.darkTheme,
            )}
            <Prompt
              message={() => {
                alert('Жаль, что вам наскучили комментарии(');
                return true;
              }}
              when={showComments}
            />
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
};

export default Comments;
