import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LikeButton from '../../components/LikeButton/LikeButton';

export default {
  title: 'Components/Buttons/LikeButton',
  component: LikeButton,
  // parameters: {
  //   actions: {
  //     handles: ['click .like-button'],
  //   },
  // },
} as ComponentMeta<typeof LikeButton>;

const Template: ComponentStory<typeof LikeButton> = (args) => <LikeButton {...{ ...args, setLiked: (liked: boolean) => action('setLiked')([liked]) }} />;

export const Liked = Template.bind({});
Liked.args = {
  liked: true,
};

export const NotLiked = Template.bind({});
NotLiked.args = {
  liked: false,
};
