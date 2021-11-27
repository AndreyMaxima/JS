import React from 'react';
import { useRecoilValue } from 'recoil';
import { echoApiMock, getRandomTextSelector } from '../states/randomTextState';

const RandomText = () => {
  const text = useRecoilValue(getRandomTextSelector);
  const echo = useRecoilValue(echoApiMock('echo value'));
  return (
    <div className="random-text">
      <div>
        {text}
      </div>
      <div style={{ color: 'coral' }}>
        {echo}
      </div>
    </div>
  );
};

export default RandomText;
