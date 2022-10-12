import React from 'react'
import { useGlobalContext } from './context';
import "./App.css";



export const Stories = () => {
    
  const {hits, isLoading, removePost} = useGlobalContext();

    if(isLoading){
        return(
        <>
        <h1>Loading...</h1>
        </>
        )
    }

  return (
    <>
    <h2>Tech News</h2>
    {hits.map((curPost) =>{
        const { title, author, objectID, url, num_comments } = curPost;
        return (
            <>
                <div className='card' key={objectID}>
                    <h2>{title}</h2>
                    <p>
                        By <span>{author}</span> | <span> {num_comments} </span>Comments
                    </p>
                    <div className='card-button'>
                        <a href={url} target='_blank'>
                            Reaad More
                        </a>
                        <a href='/#' onClick={() => removePost(objectID)}>
                            Remove
                        </a>

                    </div>

                </div>
        
            </> 
        )
        
    })}
    </>
  );
}

export default Stories;