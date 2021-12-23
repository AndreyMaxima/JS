import React from 'react';
import {
  Route, Switch, HashRouter, Redirect,
} from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import Comments from './forms/Comments/Comments';
import {
  ThemeContext,
  ThemeContextProvider,
  ThemeContextState,
} from './contexts/ThemeContext';
import Main from './forms/Main/Main';
import User from './forms/User/User';

class App extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <ThemeContext.Consumer>
          {
            (context: Partial<ThemeContextState>) => (
              <HashRouter>
                <div className={`App ${context.darkTheme && 'app__dark'}`}>
                  <Header />
                  <div className="body">
                    <div className="sidebar-container">
                      <Sidebar />
                    </div>
                    <div className="content">
                      {/* Внутри switch будет отрендерен только первый совпавший роут, без него, все совпавшие с path */}
                      <Switch>
                        {/* <Route exact path={'/'/* Содержимое будет отрендерено, если путь соответсвует целиком *!/> */}
                        {/*  <Main /> */}
                        {/* </Route> */}
                        <Route path={'/post' /* Содержимое будет отрендерено, если соответствует начало пути */}>
                          <Comments />
                        </Route>
                        <Route path={'/user/:id' /* Содержимое будет отрендерено, если соответствует начало пути */}>
                          <User />
                        </Route>
                        <Route path="/home">
                          <Main />
                        </Route>
                        <Redirect from="/" to={'/home'/* Использование редиректа */} />
                      </Switch>
                    </div>
                  </div>
                </div>
                {/* <ScrollToTop /> */}
              </HashRouter>
            )
          }
        </ThemeContext.Consumer>
      </ThemeContextProvider>
    );
  }
}

export default App;
