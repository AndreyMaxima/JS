import {load} from '../../actions/CommentsActions'
import * as dummyApi from '../../api/dumMyApi'
import {EMPTY_FUNC} from "../../constants/common";

jest.mock('../../api/dumMyApi')


describe('CommentsActions test', () => {

  const loadAction = load(1, 10)

  test('load: should call showLoadingAction', () => {
    dummyApi.getCommentsList.mockResolvedValue('success result')
    const dispatch = jest.fn();
    loadAction(dispatch)
    expect(dispatch).toBeCalledWith({ type: 'COMMENTS/SHOW_LOADING'})
  })

  test('load: should call loadSuccessAction', (done) => {
    const apiResult = 'success result'
    dummyApi.getCommentsList.mockResolvedValue(apiResult)
    const dispatch = jest
      .fn()
      .mockImplementationOnce(EMPTY_FUNC)
      .mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'COMMENTS/LOAD_COMMENTS_SUCCESS',
        commentsList: apiResult
      })
      done()
    });
    loadAction(dispatch)
  })

  test('load: should call loadErrorAction', (done) => {
    const error = 'error result'
    dummyApi.getCommentsList.mockRejectedValue(error)
    const dispatch = jest
      .fn()
      .mockImplementationOnce(EMPTY_FUNC)
      .mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'COMMENTS/LOAD_COMMENTS_ERROR',
        error: error
      })
      done()
    });
    loadAction(dispatch)
  })

  test('load: should call hideLoadingAction with api success', (done) => {
    const apiResult = 'success result'
    dummyApi.getCommentsList.mockResolvedValue(apiResult)
    const dispatch = jest
      .fn()
      .mockImplementationOnce(EMPTY_FUNC)
      .mockImplementationOnce(EMPTY_FUNC)
      .mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'COMMENTS/HIDE_LOADING',
      })
      done()
    });
    loadAction(dispatch)
  })

  test('load: should call hideLoadingAction with api fail', (done) => {
    const error = 'error result'
    dummyApi.getCommentsList.mockRejectedValue(error)
    const dispatch = jest
      .fn()
      .mockImplementationOnce(EMPTY_FUNC)
      .mockImplementationOnce(EMPTY_FUNC)
      .mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'COMMENTS/HIDE_LOADING',
      })
      done()
    });
    loadAction(dispatch)
  })
})
