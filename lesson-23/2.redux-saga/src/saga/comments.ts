import {
  takeEvery, put, all, call, AllEffect, CallEffect, PutEffect,
} from 'redux-saga/effects';
import { LOAD_COMMENTS } from '../constants/actions/comments';
import { getCommentsList } from '../api/dumMyApi';
import { loadErrorAction, loadSuccessAction } from '../actions/CommentsActions';
import { CommentsAction } from '../types/actions';

const fakeApi = () => new Promise((res) => setTimeout(() => res('fake api ready'), 3000));

function* loadComments(): Generator<AllEffect<CallEffect<any>> | PutEffect<CommentsAction>, void, [any, any]> {
  try {
    // Плохой приммер работы с несколькими API (запросы происходят последовательно)
    // const otherResponse: string = yield fakeApi(); // Запрос к API
    // console.log(otherResponse);
    // const apiResult: Array<CommentType> = yield getCommentsList(0, 10); // Запрос к API

    // Верный пример запроса к нескольким API (запросы производятся параллельно)
    const [otherResponse, apiResult] = yield all([ // Паралельный вызов
      call(fakeApi),
      call( // Вызвать метод
        getCommentsList, // Вызываемый метод
        0, // Параметры для вызова метода
        10, // Параметры для вызова метода
      ),
    ]);

    console.log(otherResponse);
    yield put( // Отправка action в store
      loadSuccessAction(apiResult), // action creater для action'a успешной загрузки
    );
  } catch (e: any) {
    yield put(loadErrorAction(e.toString()));
  }
}

export default function* commentsWatcher(
  // action
) {
  yield takeEvery(
    LOAD_COMMENTS, // Тип action'a
    loadComments, // Обработчик
  );
}
