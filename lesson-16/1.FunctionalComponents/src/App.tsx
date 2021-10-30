import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import Comments from './forms/Comments/Comments';
import { ThemeContextConsumer, ThemeContextProvider, ThemeContextState } from './contexts/ThemeContext';

class App extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <ThemeContextConsumer>
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
        </ThemeContextConsumer>
      </ThemeContextProvider>
    );
  }
}

export default App;
