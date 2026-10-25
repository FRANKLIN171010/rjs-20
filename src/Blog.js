import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      <h2>Latest Blog Posts</h2>

      <div className="post-list">
        <article className="post-card">
          <h3>Web Development</h3>
          <p>Learn the fundamentals of building modern websites.</p>
          <Link to="/blog/post1">Read More</Link>
        </article>

        <article className="post-card">
          <h3>Learning React</h3>
          <p>Discover React components, Hooks, and routing.</p>
          <Link to="/blog/post2">Read More</Link>
        </article>

        <article className="post-card">
          <h3>Career Skills</h3>
          <p>Explore skills that help you grow professionally.</p>
          <Link to="/blog/post3">Read More</Link>
        </article>
      </div>
    </div>
  );
}

export default Blog;
