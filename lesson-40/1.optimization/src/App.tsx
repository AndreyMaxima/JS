import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FirstExample from "./Examples/FirstExample";
import FirstOptimization from "./Examples/FirstOptimization";
import SecondExample from "./Examples/SecondExample";
import SecondOptimization from "./Examples/SecondOptimization";
import ThirdExample from "./Examples/ThirdExample";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/first-example" element={<FirstExample />}/>
      <Route path="/first-optimization" element={<FirstOptimization />}/>
      <Route path="/second-example" element={<SecondExample />}/>
      <Route path="/second-optimization" element={<SecondOptimization />}/>
      <Route path="/third-example" element={<ThirdExample />}/>
    </Routes>
  </BrowserRouter>
}

export default App;
