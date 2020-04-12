import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Content from "./Content";
import About from "./About";
import Posts from "./Posts";
import Post from "./Post";
import Contact from "./Contact";
import Login from "./Login";

import { posts } from "../posts";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/about">
            <Content children={<About />} />
          </Route>
          <Route path={"/posts/:id"}>
            <Content children={<Post posts={posts} />} />
          </Route>
          <Route path="/posts">
            <Content children={<Posts posts={posts} />} />
          </Route>
          <Route path="/contact">
            <Content children={<Contact />} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}
