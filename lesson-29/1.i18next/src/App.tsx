import React from 'react';
import './App.less';
import picture from '../public/jpg.jpg';

const App = () => (
  <div id="app">
    <h1>Hello</h1>
    <img src={picture} alt="any text" style={{ width: '200px' }} />
  </div>
);

export default App;
