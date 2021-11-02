import {
  APP_ID_FIELD, APP_ID_VALUE, BASE_URL, COMMENT_URL, LIMIT_FIELD, PAGE_FIELD, USER_URL,
} from '../constants/api/dumMyApi';
import { METHOD_GET } from '../constants/api/common';
import {
  CommentType, PostListResponse, ResponseError, UserResponse,
} from '../types/dumMyApiResponses';

const doGetRequest = <T>(
  path: string,
  callback: (resp: T) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
  searchParams?: Record<string, any>,
) => {
  const url = new URL(path, BASE_URL);
  searchParams && Object.entries(searchParams).forEach((params) => {
    url.searchParams.append(params[0], params[1].toString());
  });
  // url.search = new URLSearchParams(searchParams).toString();
  fetch(url.toString(), {
    method: METHOD_GET,
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
    }),
  }).then((resp) => resp.json())
    .then(callback)
    .catch(errorCallback)
    .finally(finalCallback);
};

export const getCommentsList = (
  page: number,
  limit: number,
  callback: (resp: Array<CommentType>) => void,
  errorCallback?: (resp: any) => void,
  finalCallback?: () => void,
) => {
  doGetRequest(
    COMMENT_URL,
    (resp: PostListResponse) => callback(resp.data),
    errorCallback,
    finalCallback,
    {
      [PAGE_FIELD]: page,
      [LIMIT_FIELD]: limit,
    },
  );
};

export const getUserById = (
  id: string,
  callback: (resp: UserResponse) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
) => {
  doGetRequest(`${USER_URL}/${id}`, callback, errorCallback, finalCallback);
};
