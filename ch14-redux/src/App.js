import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Movies from "./components/movies/Movies";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
