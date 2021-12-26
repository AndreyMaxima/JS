import React, {useState} from 'react';

const Child = () => {
  console.log('child rendered')
  return <div>Дочерний компонент</div>
}

const FirstExample = () => {
  const [inputValue, setInputValue] = useState(''); // При изменении значения input, перерендеривается Child (т.к. перерендеривается родительский компонент)
  return <div>
    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
  <Child/>
  </div>
}

export default FirstExample;
