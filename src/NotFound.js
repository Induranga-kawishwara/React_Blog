import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return(
    <div className="not-found">
        <h2>Sorry</h2>
        <p>404 - Page Not Found!</p>
        <Link to="/">Back to the Home Page</Link>
    </div>

  );
}
