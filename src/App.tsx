import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import HeresySheet from "./HeresySheet/HeresySheet";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/jogul">
            <HeresySheet />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
