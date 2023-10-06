import React, {useReducer} from "react";

import { types } from "./01-types";

export const UserReducer = (state = {}, action) => {

    

    switch(action.type){

        case types.test:
            return {
                ...state,
                checking: action.payload
            }

        default:
            return state;
    }

}