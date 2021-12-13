const { createGetWithPagination } = require('../../../src/api/dummyApi/common')
const fetch = require('node-fetch')
jest.mock('node-fetch')

afterEach(() => {
  jest.clearAllMocks()
})

describe('createGetWithPagination', () => {
  test('should return function', () => {
    expect(createGetWithPagination('endpoint', 'page', 'limit')).toEqual(expect.any(Function))
  })
})
