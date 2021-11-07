import { useState } from 'react';

const useCount = (initialCount = 0) => { // Создание пользовательского хука
  const [count, setCount] = useState(initialCount); // Использование состаяния внутри хука
  const addCount = () => {
    setCount(count + 1);
  };
  return {
    count,
    addCount,
  };
};

export default useCount;
