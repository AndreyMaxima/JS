import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { ThemeContext, ThemeContextState } from '../../contexts/ThemeContext';

export class Sidebar extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {
          (context: Partial<ThemeContextState>) => (
            <div className={`sidebar ${context.darkTheme && 'sidebar_dark'}`}>
              <ul>
                <Link to="/"><li>Главная</li></Link>
                <Link to="/post"><li>Пост</li></Link>
              </ul>
            </div>
          )
        }
      </ThemeContext.Consumer>
    );
  }
}
