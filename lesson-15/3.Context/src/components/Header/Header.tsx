import React from 'react';
import './Header.css';
import { ThemeCheckbox } from '../ThemeCheckbox/ThemeCheckbox';

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>
          &quot;ООО &quot;Рога и Нога&quot;
        </h1>
        <ThemeCheckbox />
      </div>
    );
  }
}
