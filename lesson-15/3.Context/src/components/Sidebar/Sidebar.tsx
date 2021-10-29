import React from 'react';
import './Sidebar.css';
import { ThemeContextConsumer, ThemeContextState } from '../../contexts/ThemeContext';

export class Sidebar extends React.Component {
  render() {
    return (
      <ThemeContextConsumer>
        {
          (context: Partial<ThemeContextState>) => (
            <div className={`sidebar ${context.darkTheme && 'sidebar_dark'}`}>
              <ul>
                <li>Главная</li>
                <li>Комментирии</li>
                <li>Профиль</li>
              </ul>
            </div>
          )
}
      </ThemeContextConsumer>
    );
  }
}
