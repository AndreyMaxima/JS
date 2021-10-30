import React, { ChangeEvent } from 'react';
import { ThemeContextConsumer, ThemeContextState } from '../../contexts/ThemeContext';

export class ThemeCheckbox extends React.Component {
  render(): React.ReactNode {
    return (
      <ThemeContextConsumer>
        {
          (context: Partial<ThemeContextState>) => (
            <div className="theme-checkbox">
              Тёмная тема
              <input
                className="theme-checkbox__input"
                checked={context.darkTheme}
                type="checkbox"
                onChange={
                  (e: ChangeEvent<HTMLInputElement>) => context.toggleTheme && context.toggleTheme(e.target.checked)
                }
              />
            </div>
          )
        }
      </ThemeContextConsumer>
    );
  }
}
