import React from 'react';
import './Header.css';
import { ThemeCheckbox } from '../ThemeCheckbox/ThemeCheckbox';
import { ThemeContextConsumer, ThemeContextState } from '../../contexts/ThemeContext';

export class Header extends React.Component {
  render() {
    return (
      <ThemeContextConsumer>
        {(context: Partial<ThemeContextState>) => (
          <div className={`header ${context.darkTheme && 'header__dark'}`}>
            <h1>
              &quot;ООО &quot;Рога и Нога&quot;
            </h1>
            <ThemeCheckbox />
          </div>
        )}
      </ThemeContextConsumer>
    );
  }
}
