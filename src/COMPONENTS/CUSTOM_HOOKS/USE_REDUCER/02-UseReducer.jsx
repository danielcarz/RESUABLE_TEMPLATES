import React, {useReducer} from "react";

import { types } from "./01-types";

export const UserReducer = (state = {}, action) => {

    

    switch(action.type){

        case types.login:
            return {
                ...state,
                logged:true,
                checking: action.payload
            }
        
        
        case types.logOut:
            return{
                logged: false,
                
            }
       

        default:
            return state;
    }

}