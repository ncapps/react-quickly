import React from "react";
import { NavLink } from "react-router-dom";

export default function Content({children}) {
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
      {children}
    </div>
  );
}
