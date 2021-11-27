import React, { Suspense } from 'react';
import ToDo from './components/ToDo/ToDo';
import RandomText from './components/RandomText';
import RandomTextWithoutSuspense from './components/RandomTextWithoutSuspense';

const App = () => (
  <div id="app">
    <ToDo />
    <Suspense fallback={<div>Случайный текст загружается</div>}>
      <RandomText />
    </Suspense>
    <RandomTextWithoutSuspense />
  </div>
);
export default App;
