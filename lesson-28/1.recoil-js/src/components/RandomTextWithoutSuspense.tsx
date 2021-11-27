import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { getRandomTextSelector } from '../states/randomTextState';

const RandomTextWithoutSuspense = () => {
  const result = useRecoilValueLoadable(getRandomTextSelector);
  let text = '';
  switch (result.state) {
    case 'hasValue':
      text = result.contents;
      break;
    case 'loading':
      text = 'Loading...';
      break;
    case 'hasError':
      text = 'ERROR';
      break;
    default:
      text = '';
  }
  return (<div className="random-text" style={{ color: 'darkcyan' }}>{text}</div>);
};

export default RandomTextWithoutSuspense;
