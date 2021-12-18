import { getCommentsList } from '../../api/dumMyApi'

describe('dummyApi tests', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  test('getCommentsList: should call fetch with url and options', () => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const fetchOptions = {
      method: 'GET',
      headers: new Headers({
        'app-id': '617b11efbdaa719034cf6d83'
      }),
    }
    const url = 'https://dummyapi.io/data/v1/comment?page=1&limit=10'
    getCommentsList(1, 10)
    expect(fetch).toBeCalledWith(url, fetchOptions)
  })

  test('getCommentsList: should return response.data', (done) => {
    const fetchResponse = {
      data: 'any data'
    }
    fetch.mockResponse(JSON.stringify(fetchResponse))
    const result = getCommentsList(1, 10)
    expect(result).toEqual(expect.any(Promise))
    result.then(data => {
      expect(data).toBe(fetchResponse.data)
      done()
    })
  })


  test('getCommentsList: should return fetch error', (done) => {
    const error = 'fetch error'
    fetch.mockReject(() => Promise.reject(error))
    const result = getCommentsList(1, 10)
    expect(result).toEqual(expect.any(Promise))
    result.catch(err => {
      expect(err).toBe(error)
      done()
    })
  })
})
