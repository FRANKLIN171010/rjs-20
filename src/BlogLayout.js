import React from "react";
import { Link, Outlet } from "react-router-dom";

function BlogLayout() {
  return (
    <div className="blog-layout">
      <header>
        <h1>Blog Section</h1>
        <p>Explore articles about technology and career growth.</p>
      </header>

      <nav className="blog-nav">
        <Link to="/blog">All Posts</Link>
        <Link to="/blog/post1">Web Development</Link>
        <Link to="/blog/post2">Learning React</Link>
        <Link to="/blog/post3">Career Skills</Link>
      </nav>

      <main className="blog-content">
        <Outlet />
      </main>
    </div>
  );
}

export default BlogLayout;
