import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import HeresySheetRedux from "./HeresySheet/HeresySheetRedux";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/jogul">
            <HeresySheetRedux />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
