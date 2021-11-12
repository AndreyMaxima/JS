import React, { useState } from 'react';
import { connect } from 'react-redux';
import { State } from '../types/state';

interface Props {
  records: Array<string>;
  addCallback: (text: string) => void;
}

const List = ({ records, addCallback }: Props) => {
  const [inputText, setInputText] = useState('');
  return (
    <div id="app">
      <input type="text" onChange={(e) => setInputText(e.target.value)} />
      <button type="button" onClick={() => addCallback(inputText)}>Добавить</button>
      {records.map((text, index) => <div key={index}>{text}</div>)}
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  records: state.records,
});

// const connectHOC = connect(mapStateToProps);
// export default connectHOC(List);

export default connect(mapStateToProps)(List);
