import React, { useEffect } from 'react'

export const Stories = () => {

    let API = "https://hn.algolia.com/api/v1/search?query=html";


    const fetchApiData = async (URL) => {
        try{
            const res = await fetch(URL); 
            const data = await res.json();
            console.log(data);

        }
        catch(error){

            console.log(error);

        }
    }

    useEffect(() => {
        fetchApiData(API);

    }, []);

  return (
    <>
    
    </>
  )
}

export default Stories;