import React, {useState} from 'react';

const Child = () => {
  console.log('child rendered')
  return <div>Дочерний компонент</div>
}

const TextInput = () => { // TextInput вынесен в отдельный компонент
  const [inputValue, setInputValue] = useState('');
  return <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
}

const FirstOptimization = () => {
  return <div>
    <TextInput/>
    <Child/> {/* Child не перерендеривается, т.к. не зависит от TextInput*/}
  </div>
}

export default FirstOptimization;
