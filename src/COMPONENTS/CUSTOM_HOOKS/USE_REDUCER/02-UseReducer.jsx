import React, {useReducer} from "react";

export const UserReducer = (state = {}, action) => {
    switch(action.type){

        case type.test:
            return {
                ...state,
                checking: action.payload
            }

        default:
            return state;
    }

}