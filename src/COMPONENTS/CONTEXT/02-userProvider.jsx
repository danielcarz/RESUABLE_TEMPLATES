import React from "react";

//contex
import { UserContext } from "../../ROUTES/index";

export const UserProvider = ({children}) => {

    return(
        <UserContext.Provider value={{value: 'hello'}}>
            {children}
        </UserContext.Provider>

    )
   

}