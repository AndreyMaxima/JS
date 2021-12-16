import React from 'react';
import configureStore from 'redux-mock-store';
import { render, mount } from 'enzyme';
import thunk from 'redux-thunk';
import CommentsList from '../../forms/CommentsList';
import { EMPTY_STRING } from '../../constants/common';
import * as actions from '../../actions/CommentsActions';

jest.mock('../../actions/CommentsActions');

const mockStore = configureStore([thunk]);

describe('CommentList form test', () => {
  test('should render tree comments', () => {
    const store = mockStore({
      comments: {
        commentsList: [
          {
            message: '1',
          },
          {
            message: '2',
          },
          {
            message: '3',
          },
        ],
        loading: false,
        error: EMPTY_STRING,
      },
    });
    const wrapper = render(<CommentsList store={store} />);
    expect(wrapper.find('.comment')).toHaveLength(3);
  });

  test('should render loading', () => {
    const store = mockStore({
      comments: {
        commentsList: [],
        loading: true,
        error: EMPTY_STRING,
      },
    });
    const wrapper = render(<CommentsList store={store} />);
    expect(wrapper.text()).toBe('загрузка');
  });

  test('should render error', () => {
    const error = 'error';
    const store = mockStore({
      comments: {
        commentsList: [],
        loading: false,
        error,
      },
    });
    const wrapper = render(<CommentsList store={store} />);
    expect(wrapper.text()).toBe(error);
  });

  test('should call load action', () => {
    const store = mockStore({
      comments: {
        commentsList: [],
        loading: false,
        error: EMPTY_STRING,
      },
    });
    store.dispatch = jest.fn();
    mount(<CommentsList store={store} />);
    expect(actions.load).toBeCalledWith(5, 10);
  });
});
