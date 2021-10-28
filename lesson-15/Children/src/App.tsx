import React from 'react';
import './App.css'; import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import Comments from './forms/Comments/Comments';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <div className="sidebar-container">
            <Sidebar />
          </div>
          <div className="content">
            <Comments />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
