import { ACTION_TYPES } from "./ActionType"




export const DataReducer = (state, action) =>{
    switch(action.type){

        case ACTION_TYPES.INITIALIZE: 
        
        return {...state, currentPosts: action.payload}

        case ACTION_TYPES.CREATE_A_POST : 

        return {}

        case ACTION_TYPES.SEARCH_ACTION: 
        return {}

        default:
            return state
    }
}