import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Content from "./Content";
import Login from "./Login";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Content />
        </Route>
      </Switch>
    </Router>
  );
}
