import React from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import Post from './Post';

export default function Posts({ posts }) {
  const { path, url } = useRouteMatch(); 

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

      {/* <Switch>
        <Route exact path={path}>
          <h3>Select a post</h3>
        </Route>
        <Route path={`${path}/:id`}>
          <Post posts={posts}/> 
        </Route>
      </Switch> */}
    </div>
  );
}
