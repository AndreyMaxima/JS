import { useLocation } from 'react-router';
import { useEffect } from 'react';

const ScrollToTop = () => { // Компонент прокручивает страницу наверх. Необходимо подключать внутри роутера
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
