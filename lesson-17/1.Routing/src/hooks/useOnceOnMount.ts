import { EffectCallback, useEffect } from 'react';

const useOnceOnMount = (callback: EffectCallback) => { // Создание пользовательского хука
  useEffect(callback, []);
};

export default useOnceOnMount;
