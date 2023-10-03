import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
export const Create = () => {
  const [title , setTitle] = useState('');
  const[body, setbody]=useState('');
  const [author , setAuthor]=useState('yoshi');
  const [isPending , setIspending] = useState(false);
  const history = useNavigate();

  const hadlesubmit = (e)=>{
    e.preventDefault();
    
    const blog ={title,body,author};
    setIspending(true);
    fetch('http://localhost:8000/blogs',{
      method:'POST'  ,
      headers : {'Content-Type':'application/json'},
      body:JSON.stringify(blog)
    }).then(()=>
    alert("New Blog Added"),
    setTitle(''),
    setbody(''),
    setIspending(false),
    history('/')

    )
    

  }
  return (
    <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={hadlesubmit} >
          <label>Blog title:</label>
          <input type="text" 
          required
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea required 
          value={body}
          onChange={(e)=>setbody(e.target.value)}
          ></textarea>
          <label>Author:</label>
          <select
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          {!isPending ? <button>Add Blog</button> : <button disabled>Adding blog......</button>}
          {/* {!isPending && <button>Add Blog</button> }
          {isPending && <button disabled>Adding blog......</button>} */}
        </form>
    </div>
  );
};
