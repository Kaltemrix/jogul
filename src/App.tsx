import React from "react";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import HeresySheet from "./HeresySheet/HeresySheet";

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/jogul" element={<HeresySheet name="Jogul"/>} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
