import React from "react";
import { useParams } from "react-router-dom";
import Usefetch from "./Usefetch";
import { useNavigate} from "react-router-dom";


export const BlogDetails = () => {
  const {id} = useParams();
  const history = useNavigate();
  const { data : blog , isloading, error } = Usefetch ( `http://localhost:8000/blogs/${id}`);
  const handleClick=()=>{
    fetch(`http://localhost:8000/blogs/${id}`,{
      method : 'DELETE'
    }).then(()=>{
      history('/');

    })
  }
  return (
  <div className="blog-details">
    {isloading &&  <div>Loading.....</div>}
    {error && <div>{error} </div>}
    {blog && (
      <article>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleClick}>Delete</button>
      </article>
    )}


  </div>  
  );
  
};
