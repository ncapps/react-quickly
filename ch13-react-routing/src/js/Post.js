import React from "react";
import { useParams } from "react-router-dom";

export default function Post({ posts }) {
  const { id } = useParams();
  const post = posts.find((el) => el.slug === id);
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
      <p>
        <a href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        >
          Continue reading...
        </a>
      </p>
    </div>
  );
}