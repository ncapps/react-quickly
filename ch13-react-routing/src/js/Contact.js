import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      {sent ? (
        <Redirect to="/about" />
      ) : (
        <div>
          <h3>Contact Us</h3>
          <input
            type="text"
            placeholder="your email"
            className="form-control"
          ></input>
          <textarea
            type="text"
            placeholder="your message"
            className="form-control"
          ></textarea>
          <button className="btn btn-primary" onClick={() => setSent(true)}>
            send
          </button>
        </div>
      )}
    </>
  );
}
