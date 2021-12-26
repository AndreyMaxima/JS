import React, {useState} from 'react';

interface ChildProps {
  count: number;
}

const Child = React.memo(({count}: ChildProps) => { // При использовании React.memo компонент не будет перерендерен, если при перерендере предыдущий пропс и новый эквивалентны (работает для примитивных, нессылочных типов)
  console.log('child rendered')
  return <div>Дочерний компонент. Кол-во кликов: {count}</div>
})

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

const SecondOptimization = () => {
  const [inputValue, setInputValue] = useState(''); // При изменении значения input, перерендеривается Child (т.к. перерендеривается родительский компонент)
  const [count, setCount] = useState(0)
  return <div>
    <Inputs
      value={inputValue}
  textCallback={setInputValue}
  buttonCallback={() => setCount(count+1)}
  />
  <Child
  count={count}
  />
  </div>
}

export default SecondOptimization;
