import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
const Card = () =>{
    const [post, setPost] = useState([]);
    const getPost = async () =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postdata = await res.json();
        setPost(postdata);
    }
    useEffect(()=>{
        getPost();
    },[]);
    let img = 'https://picsum.photos/200/350';
    return (
         <>
         <div id="main">
    {
        post.map((elem,id)=>{
            return(
                <SingleCard 
                  key={id}
                  img={img}
                  title={elem.title}
                  body={elem.body}
                  userId={elem.userId}
                  data={post}
                  setPost={setPost}
                />
                
            )
            
        })
    }
    </div>
    </>
  );
}

export default Card;
