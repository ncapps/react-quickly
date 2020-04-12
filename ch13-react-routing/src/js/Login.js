import React from "react";

export default function Login() {
  return (
    <div>
      <h3>Login</h3>
      <input type="text" placeholder="email" className="form-control"></input>
      <input
        type="text"
        placeholder="password"
        className="form-control"
      ></input>
      <button className="btn btn-primary">login</button>
    </div>
  );
}
