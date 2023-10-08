import React, {useReducer} from "react";

//reducer
import { UserReducer } from "../CUSTOM_HOOKS/USE_REDUCER/02-UseReducer";

//contex
import { UserContext } from "../../ROUTES/index";

//types
import { types } from "../CUSTOM_HOOKS/USE_REDUCER/01-types";



const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return{
        logged: !!user,
        user
    }
}

export const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(UserReducer, {} , init)

    const onChecking = (name = 'initial name') => {

        const user = {name};

        const action = {
            type: types.test,
            payload: user
        };
        
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }

    


    return(
        <UserContext.Provider value={{onChecking, ...state}}>
            {children}
        </UserContext.Provider>

    )
   

}