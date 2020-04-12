import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import About from "./About";
import Posts from "./Posts";
import Post from "./Post";
import Contact from "./Contact";

import { posts } from "../posts";

export default function Content() {
  return (
    <div>
      <h1>Node.University</h1>
      <div>
        <ul>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" activeClassName="active">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path={"/posts/:id"}>
          <Post posts={posts} />
        </Route>
        <Route path="/posts">
          <Posts posts={posts} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}
