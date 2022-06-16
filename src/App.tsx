import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import HeresySheet from "./HeresySheet/HeresySheet";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/jogul" element={<HeresySheet name="Jogul"/>} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Router>
  );
}

export default App;
