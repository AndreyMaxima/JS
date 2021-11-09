import React, { useState } from 'react';

interface Props {
  records: Array<string>;
  addRecordCallback: (text: string) => void;
}

const List = ({ records, addRecordCallback }: Props) => {
  const [inputText, setInputText] = useState('');
  const handleButton = () => {
    addRecordCallback(inputText);
    setInputText('');
  };
  return (
    <div className="list">
      <input value={inputText} type="text" onChange={(e) => setInputText(e.target.value)} />
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type="button" onClick={handleButton}>Добавить</button>
      <div>
        {records.map((record, index) => <div key={index}>{record}</div>)}
      </div>
    </div>
  );
};

export default List;
