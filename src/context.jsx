// context Creation
// Provider
// Consumer (REact removed consumer)
// useContext Hook

import React, { useContext, useReducer, useEffect } from "react"; 
import reducer from "./reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    query: "HTML",
    nbPages: 0,
    page: 0,
    hits: [],

}

// context Creation
const AppContext = React.createContext();


// Provider creating function
const AppProvider = ({children}) => {

    // const [state, setState] = useState(initialState);


    // useReducer Hook created for data management
    const [state, dispatch] = useReducer(reducer, initialState);



    const fetchApiData = async (URL) => {

        dispatch ({ type: "SET_LOADING" });


        try{
            const res = await fetch(URL); 
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",

                // Payload is use for share the extra information(DATA) from the Array
                payload:{
                    hits: data.hits,
                    nbPages: data.nbPages,
                },
        
        });
            // isLoading = false;

        }
        catch(error){

            console.log(error);

        }
    }

    // Define function to remove post
    const removePost = (post_ID) =>{
        dispatch ({type: "REMOVE_POST", payload: post_ID })
    }


    // Define function for Search bar functionality
    const searchPost = (searchQuery) =>{
        dispatch({ 
            type: "SEARCH_QUERY", 
            payload: searchQuery, 
        });  
    }

    // Define Pagination functions
    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE",
        });
    }
    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE",
        });
    }


    // useEffect is used for call the API function
    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);

    }, [state.query, state.page]);

    return (
        <AppContext.Provider value={{...state, removePost, searchPost, getNextPage, getPrevPage }}>
            {children}
        </AppContext.Provider>
    );

};


// Custom Hook creation 

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };