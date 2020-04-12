import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function Posts({ posts }) {
  const { url } = useRouteMatch(); 

  return (
    <div>
      Posts
      <ol>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`${url}/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
