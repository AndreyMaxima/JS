import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../../components/Comment';

describe('Comment component test', () => {
  test('should render comment', () => {
    const wrapper = shallow(<Comment />);
    expect(wrapper.find('div.comment')).toHaveLength(1);
  });

  test('should render info', () => {
    const firstName = 'Andreas';
    const lastName = 'Valent';
    const avatar = 'anyUrl';
    const message = 'any text';
    const wrapper = shallow(<Comment
      firstName={firstName}
      lastName={lastName}
      avatarUrl={avatar}
      message={message}
    />);
    expect(wrapper.find('div.comment_avatar').find('img').prop('src')).toBe(avatar);
    expect(wrapper.find('div.comment_user-name').text()).toBe(`${firstName} ${lastName}`);
    expect(wrapper.find('div.comment_message').text()).toBe(message);
    expect(wrapper.find('div.comment_message').text()).toBe(message);
    expect(wrapper.find('div.comment_like').text()).toBe('не лайкнуто');
  });

  test('should handle like', () => {
    const wrapper = shallow(<Comment
      firstName="firstName"
      lastName="lastName"
      avatarUrl="avatar"
      message="message"
    />);
    expect(wrapper.find('div.comment_like').text()).toBe('не лайкнуто');
    wrapper.find('div.comment_like').simulate('click');
    expect(wrapper.find('div.comment_like').text()).toBe('лайкнуто');
    wrapper.find('div.comment_like').simulate('click');
    expect(wrapper.find('div.comment_like').text()).toBe('не лайкнуто');
  });
});

describe('Comment snapshot test', () => {
  test('should render empty comment', () => {
    const wrapper = shallow(<Comment />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle like', () => {
    const wrapper = shallow(<Comment />);
    wrapper.find('div.comment_like').simulate('click');
    expect(wrapper).toMatchSnapshot();
    wrapper.find('div.comment_like').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
