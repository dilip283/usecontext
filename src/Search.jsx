import React from 'react'
import { useGlobalContext } from './context';

const Search = () => {

  const {query, searchPost} = useGlobalContext();
  return (
    <>
    
      <h1 className='heading'>Tech News</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='search-bar'>
          <input type="text" placeholder="Search here"  value={query} onChange={(e) => searchPost(e.target.value)} />
        </div>
      </form>
    
    </> 
  )
}

export default Search;
