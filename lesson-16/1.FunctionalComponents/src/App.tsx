import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import Comments from './forms/Comments/Comments';
import {
  ThemeContext,
  ThemeContextProvider,
  ThemeContextState,
} from './contexts/ThemeContext';

class App extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <ThemeContext.Consumer>
          {
            (context: Partial<ThemeContextState>) => (
              <div className={`App ${context.darkTheme && 'app__dark'}`}>
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
            )
          }
        </ThemeContext.Consumer>
      </ThemeContextProvider>
    );
  }
}

export default App;
