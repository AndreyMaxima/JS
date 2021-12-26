import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';

const FirstExample = React.lazy(() => import("./Examples/FirstExample"))
const FirstOptimization = React.lazy(() => import("./Examples/FirstOptimization"))
const SecondExample = React.lazy(() => import("./Examples/SecondExample"))
const SecondOptimization = React.lazy(() => import("./Examples/SecondOptimization"))
const ThirdExample = React.lazy(() => import("./Examples/ThirdExample"))

const App = () => {
  return <HashRouter>
    <React.Suspense fallback={<div>Идёт загрузка...</div>}>
      <Routes>
        <Route path="/" element={<div>Домашняя страница</div>}/>
        <Route path="/first-example" element={<FirstExample/>}/>
        <Route path="/first-optimization" element={<FirstOptimization/>}/>
        <Route path="/second-example" element={<SecondExample/>}/>
        <Route path="/second-optimization" element={<SecondOptimization/>}/>
        <Route path="/third-example" element={<ThirdExample/>}/>
      </Routes>
    </React.Suspense>
  </HashRouter>
}

export default App;
