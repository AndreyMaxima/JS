import React from 'react';
import './App.css'; import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import Comments from './forms/Comments/Comments';
import withHelper from './wrappers/withHelper';

const SidebarWithHelper = withHelper(Sidebar, 'Это сайдбар');
const CommentsWithHelper = withHelper(Comments, 'Это форма комментариев');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <div className="sidebar-container">
            <SidebarWithHelper />
          </div>
          <div className="content">
            <CommentsWithHelper />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
