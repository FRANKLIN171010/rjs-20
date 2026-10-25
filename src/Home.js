import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to My Blog</h1>
      <p>
        Discover articles about web development, React,
        and professional growth.
      </p>
      <Link className="button" to="/blog">
        Explore Blog
      </Link>
    </div>
  );
}

export default Home;
