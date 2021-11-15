import {
  APP_ID_FIELD, APP_ID_VALUE, BASE_URL, COMMENT_URL, LIMIT_FIELD, PAGE_FIELD,
} from '../constants/api/dumMyApi';
import { METHOD_GET } from '../constants/api/common';

const doGetRequest = (
  path: string,
  searchParams?: Record<string, any>,
) => {
  const url = new URL(path, BASE_URL);
  searchParams && Object.entries(searchParams).forEach((params) => {
    url.searchParams.append(params[0], params[1].toString());
  });
  return fetch(url.toString(), {
    method: METHOD_GET,
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
    }),
  }).then((resp) => resp.json())
    .then((resp) => resp.data);
};

export const getCommentsList = (
  page: number,
  limit: number,
) => doGetRequest(
  COMMENT_URL,
  {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit,
  },
);
