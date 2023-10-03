import React from "react";
import Usefetch from "./Usefetch";
import { Bloglist } from "./Bloglist";

export const Home = () => {

    const { data : blog , isloading, error } = Usefetch ( "http://localhost:8000/blogs");



  return (
  <div className="home">
    {error && <div>{error}</div>}
    {isloading && <div>Loading......</div> }
    {blog && <Bloglist bloglist= {blog}/>}
  </div>
  );
};
