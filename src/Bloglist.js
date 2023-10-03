import React from "react";
import { Link } from "react-router-dom";

export const Bloglist = ({ bloglist }) => {
  return (
    <div className="blog-list">
      {bloglist.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
