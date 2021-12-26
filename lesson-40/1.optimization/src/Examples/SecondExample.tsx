import React, {useState} from 'react';

interface ChildProps {
  count: number;
}

const Child = ({count}: ChildProps) => {
  console.log('child rendered')
  return <div>Дочерний компонент. Кол-во кликов: {count}</div>
}

interface InputsProps {
  textCallback: any;
  buttonCallback: any;
  value: string;
}

const Inputs = ({value, textCallback, buttonCallback}: InputsProps) => {
  return <div>
    <input type="text" value={value} onChange={(e) => textCallback(e.target.value)}/>
    <button onClick={buttonCallback}>Кликни меня</button>
  </div>
}

const SecondExample = () => {
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState(0)
  return <div>
    <Inputs
      value={inputValue}
      textCallback={setInputValue}
      buttonCallback={() => setCount(count+1)}
    />
    <Child
      count={count} // При изменении значения input, перерендеривается Child (т.к. перерендеривается родительский компонент и пропс count передаётся заново)
    />
  </div>
}

export default SecondExample;
