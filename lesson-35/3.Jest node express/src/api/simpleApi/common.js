const {APP_ID_FIELD, APP_ID_VALUE, BASE_URL,} = require('../../constants/api/simpleapi');
const {METHOD_GET} = require('../../constants/api/common');
const fetch = require('node-fetch')

const doGetRequest = (path, searchParams) => {
  const url = new URL(path, BASE_URL);
  searchParams && Object.entries(searchParams)
    .forEach((params) => {
      url.searchParams.append(params[0], params[1].toString());
    });
  return fetch(url.toString(), {
    method: METHOD_GET,
    headers: {
      [APP_ID_FIELD]: APP_ID_VALUE,
    },
  }).then((resp) => resp.json())
};

const createGetWithPagination = (endpointUrl, pageParam, limitParam) => (page, limit) => doGetRequest(
  endpointUrl,
  {
    [pageParam]: page,
    [limitParam]: limit,
  },
);

module.exports = {
  createGetWithPagination
}
