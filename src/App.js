import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogLayout from "./components/BlogLayout";
import Post1 from "./pages/Post1";
import Post2 from "./pages/Post2";
import Post3 from "./pages/Post3";

import "./index.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <nav className="navbar">
        <h2>My Blog</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<Blog />} />
          <Route path="post1" element={<Post1 />} />
          <Route path="post2" element={<Post2 />} />
          <Route path="post3" element={<Post3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
