import React from 'react';
import {
  match as Match, Route, useRouteMatch, withRouter,
} from 'react-router-dom';
import { Location, History } from 'history';

interface Props {
  match: Match;
  location: Location;
  history: History;
}

const Main = (props: Props) => {
  const { match, location, history } = props; // Получение объектов через HOC
  const hookMatch = useRouteMatch();
  console.log(match);
  console.log(hookMatch);
  console.log(location);
  console.log(history);
  // const history = useHistory(); // Получение объекта истории через хук
  return (
    <div className="main-form">
      <h1>Добро пожаловать!</h1>
      {/* Маршрутизация может быть вложенной */}
      <Route path={`${match.path}/route`}>
        <div>Первый роут</div>
      </Route>
      <Route path={`${match.path}/route/2`}>
        <div>Второй роут</div>
      </Route>
      {/* @ts-ignore */}
      <button type="button" onClick={history.goBack}>Вернуться назад</button>
    </div>
  );
};

export default withRouter(Main);
