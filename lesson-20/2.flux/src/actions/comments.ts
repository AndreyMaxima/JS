import dispatcher from '../dispatcher';
import { LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS } from '../constants/actions/comments';
import { getCommentsList } from '../api/dumMyApi';

export const loadCommentsAction = (page: number, pageSize: number) => {
  dispatcher.dispatch({ // Отправить action'а для отображени загрузки
    type: LOAD_COMMENTS,
  });
  getCommentsList(page, pageSize).then((commentResponse) => dispatcher.dispatch({ // Вызов API и отправка action'а с ответом от API
    type: LOAD_COMMENTS_SUCCESS,
    payload: commentResponse.data,
  }));
};
