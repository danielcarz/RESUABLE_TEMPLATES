import React, {useReducer} from "react";

//reducer
import { UserReducer } from "../CUSTOM_HOOKS/USE_REDUCER/02-UseReducer";

//contex
import { UserContext } from "../../ROUTES/index";

const initialState = {
    checking: false,
}

export const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const onCheking = (name = ' ') => {

        const action = {
            type: type,
            payload: {
                name
            }
        }
        dispatch(action)
    }

    return(
        <UserContext.Provider value={{value: 'hello'}}>
            {children}
        </UserContext.Provider>

    )
   

}