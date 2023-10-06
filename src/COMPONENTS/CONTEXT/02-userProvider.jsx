import React, {useReducer} from "react";

//reducer
import { UserReducer } from "../CUSTOM_HOOKS/USE_REDUCER/02-UseReducer";

//contex
import { UserContext } from "../../ROUTES/index";

//types
import { types } from "../CUSTOM_HOOKS/USE_REDUCER/01-types";

const initialState = {
    checking: '',
}

export const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const onChecking = (name = ' ') => {

        const action = {
            type: types.test,
            payload: {
                name: name
            }
        }
        
        dispatch(action)
    }

    


    return(
        <UserContext.Provider value={{onChecking, ...state}}>
            {children}
        </UserContext.Provider>

    )
   

}