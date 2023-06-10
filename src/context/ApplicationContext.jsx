import { useReducer, useEffect } from "react";
import { createContext } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { initialState } from "../reducer/InitialState";
import { ACTION_TYPES } from "../reducer/ActionType";
import axios from "axios";

export const ApplicationContext = createContext()


export function ApplicationProvider({children}){

    //piping 
    const [state, homePageDispatch ] = useReducer(DataReducer, initialState)
   
    const getPosts = () =>{
    axios({
        method: 'get',
        url: '/api/posts'
      })
        .then(function (response) {
         const { posts } = response.data;
       

        homePageDispatch(
            {type: ACTION_TYPES.INITIALIZE,
             payload: posts
            }
        )
        });
}
   
useEffect(()=>{setTimeout(() => {getPosts()}, 1000)},[])
    return(
        <ApplicationContext.Provider value ={{posts: state.currentPosts, homePageDispatch}} > {children}</ApplicationContext.Provider>
    )

}