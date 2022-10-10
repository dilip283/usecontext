 import React from 'react'
import Pagination from './Pagination';
import Search from './Search';
import Stories from './Stories';
 
 export const App = () => {
   return (
    <>
    <div>Welcome to Tech News Website</div>
    <Search />
    <Pagination />
    <Stories />
    </>
   )
 }
 

 export default App;