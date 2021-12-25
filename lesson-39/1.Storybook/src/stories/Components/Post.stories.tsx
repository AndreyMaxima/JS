import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import PostComponent from '../../components/Post/Post';

export default {
  title: 'Components/Posts/Post',
  component: PostComponent,
  argTypes: {
    text: {
      name: 'customText [original name is "text"]',
      type: { name: 'string', required: true },
      description: 'Текст для отображение в компоненбте поста',
      table: {
        type: {
          summary: 'text [original is string]',
          detail: 'Original - это текст, который был подставлен автоматически (исходя из параметров компонента typescript)',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
  },
} as ComponentMeta<typeof PostComponent>;

const Template: ComponentStory<typeof PostComponent> = (args) => <PostComponent {...{ ...args }} />;

export const Post = Template.bind({});
Post.args = {
  text: 'Как-то текст поста. ВАУ!',
};
