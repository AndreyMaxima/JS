const { createGetWithPagination } = require('../../../src/api/simpleApi/common')
const fetch = require('node-fetch')
jest.mock('node-fetch', () => jest.fn(() => Promise.resolve({
  json: () => ({
    data: 'api response'
  })
})))

describe('common', () => {

  test('createGetWithPagination: should return function', () => {
    expect(createGetWithPagination()).toEqual(expect.any(Function))
  })

  test('createGetWithPagination: should call fetch with search params, get method and app-id header', () => {
    const endpoint = 'endpoint'
    const pageParam = 'page'
    const limitParam = 'limit'
    const page = 1
    const limit = 10
    createGetWithPagination(endpoint, pageParam, limitParam)(page, limit)
    expect(fetch).toBeCalledWith(
      `https://dummyapi.io/data/v1/endpoint?${pageParam}=${page}&${limitParam}=${limit}`,
      {"headers": {"app-id": "617b11efbdaa719034cf6d83"}, "method": "GET"})
  })

  test('createGetWithPagination: should return promise with response.data', () => {
    const result = createGetWithPagination('endpoint', 'page, limit')(1, 10)
    expect(result).toEqual(expect.any(Promise))
    expect(result).resolves.toEqual('api response')

  })
})
