import { CommentResponse } from '../types/responses';

export const apiResponse: CommentResponse = {
  status: 'ok',
  result: [
    {
      name: 'Andreas',
      text: 'Hello, React!',
    },
    {
      name: 'Oleg',
      text: 'Hello, other comment!',
    },
    {
      name: 'Elena',
      text: 'Is Anybody here?',
    },
    {
      name: 'Andreas Valent',
      text: 'Hello, React!',
    },
    {},
    {
      name: '',
      text: 'any',
    },
  ],
};
