import React from 'react';
import './App.css'; import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import Comments from './forms/Comments/Comments';
import ComponentWithHelper from './wrappers/ComponentWithHelper';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <div className="sidebar-container">
            <ComponentWithHelper comment="Это сайдбар">
              <Sidebar />
            </ComponentWithHelper>
          </div>
          <div className="content">
            <ComponentWithHelper comment="Это форма комментариев">
              <Comments />
            </ComponentWithHelper>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
