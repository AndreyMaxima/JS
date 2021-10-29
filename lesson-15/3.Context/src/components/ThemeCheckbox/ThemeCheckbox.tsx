import React from 'react';
import { ThemeContextConsumer, ThemeContextState } from '../../contexts/ThemeContext';

export class ThemeCheckbox extends React.Component {
  render(): React.ReactNode {
    return (
      <ThemeContextConsumer>
        {
        (context: Partial<ThemeContextState>) => (
          <div className="theme-checkbox">
            Тёмная тема
            <input className="theme-checkbox__input" checked={context.darkTheme} type="checkbox" onClick={context.toggleTheme} />
          </div>
        )
}
      </ThemeContextConsumer>
    );
  }
}
