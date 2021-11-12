import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
// import { CommonState } from '../types/commonState';
import { addRecordAction } from '../actions/ListActions';

interface Props {
  records: Array<string>;
  addRecord: (newRecord: string) => void
  // dispatch: Dispatch // Этот пропс мы получим автоматически через HOC, возвращаемый функцией connect
}

const List = ({
  records,
  addRecord,
  // dispatch,
}: Props) => {
  const [inputText, setInputText] = useState('');
  const handleAddRecord = () => {
    // dispatch({ // Отправляем экшн в редбюсер
    //   type: 'LIST/ADD_RECORD',
    //   payload: 'new record',
    // });

    // dispatch(addRecord(inputText)); // Отправка экшена через dispatch
    addRecord(inputText);
    setInputText('');
  };
  return (
    <div id="app">
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button type="button" onClick={handleAddRecord}>Добавить</button>
      {records.map((text, index) => <div key={index}>{text}</div>)}
    </div>
  );
};

const mapStateToProps = (state: any) => ({ // Функция принимает стэйт и возвращает объект пропсов
  // records: state.list.get('records').toJS(), // Пропс records (маппинг с использованием immutable.js)
  records: state.list.records,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  addRecord: bindActionCreators(addRecordAction, dispatch),
});

// const connectHOC = connect(mapStateToProps); // Создание компонента высшего порядка, для обёртки нашего компонента
// export default connectHOC(List); // Обёртования нашего компонента в подключенный к стору компонент

export default connect(mapStateToProps, mapDispatchToProps)(List);
