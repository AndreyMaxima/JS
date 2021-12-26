import React, {useState} from 'react';

interface ChildProps {
  count: number;
  buttonCallback: any;
}

const Child = React.memo(({count, buttonCallback}: ChildProps) => {
  console.log('child rendered')
  return <div>Дочерний компонент. Кол-во кликов: {count} <button onClick={buttonCallback}>Кликни меня</button>
  </div>
})

interface InputsProps {
  textCallback: any;
  value: string;
}

const Inputs = ({value, textCallback }: InputsProps) => {
  return <div>
    <input type="text" value={value} onChange={(e) => textCallback(e.target.value)}/>
  </div>
}

const ThirdExample = () => {
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState(0)
  const handleButtonClick = React.useCallback(
    () => setCount(count+1),
    [count]
    )
  return <div>
    <Inputs
      value={inputValue}
      textCallback={setInputValue}
    />
    <Child
      count={count}
      buttonCallback={handleButtonClick}
    />
  </div>
}

export default ThirdExample;
