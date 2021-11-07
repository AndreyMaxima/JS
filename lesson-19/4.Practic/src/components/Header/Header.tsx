import React, {
  LegacyRef, useContext, useEffect, useRef,
} from 'react';
import './Header.css';
import ThemeCheckbox from '../ThemeCheckbox/ThemeCheckbox';
import { ThemeContext } from '../../contexts/ThemeContext';
// Функциональный компонент - это функция, возвращающая компонент
export const Header = () => {
  const themeContext = useContext(ThemeContext); // ПОдтягиваем контекст от ближайшего контекст-провайдера
  const ref = useRef() as LegacyRef<HTMLHeadingElement>;

  useEffect(() => console.log(ref));
  return (
    <div className={`header ${themeContext.darkTheme && 'header__dark'}`}>
      <h1 ref={ref}>
        &quot;ООО &quot;Рога и Нога&quot;
      </h1>
      <ThemeCheckbox />
    </div>
  );
};
