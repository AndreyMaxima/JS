import reducer from '../../reducers/commentsReduces'
import {EMPTY_STRING} from "../../constants/common";

const initialState = {
  commentsList: [],
  loading: false,
  error: EMPTY_STRING,
}

describe('commentsReduces test', () => {

  test('SHOW_LOADING', () => {
    expect(reducer(initialState, {type: 'COMMENTS/SHOW_LOADING'})).toEqual({
      ...initialState,
      loading: true
    })
  })

  test('HIDE_LOADING', () => {
    const state = {
      ...initialState,
      loading: true,
    }
    expect(reducer(state, {type: 'COMMENTS/HIDE_LOADING'})).toEqual({
      ...state,
      loading: false
    })
  })

  test('LOAD_COMMENTS_SUCCESS', () => {
    const commentsList = [
      {message: 'first'},
      {message: 'second'}
    ]
    expect(reducer(initialState, {type: 'COMMENTS/LOAD_COMMENTS_SUCCESS', commentsList})).toEqual({
      ...initialState,
      commentsList
    })
  })

  test('LOAD_COMMENTS_ERROR', () => {
    const error = 'fatal error'
    expect(reducer(initialState, {type: 'COMMENTS/LOAD_COMMENTS_ERROR', error})).toEqual({
      ...initialState,
      error
    })
  })

  test('UNKNOWN ACTION', () => {
    expect(reducer(initialState, {type: 'UNKNOWN'})).toEqual(initialState)
  })
})
