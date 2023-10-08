import React, { useContext } from "react";

import { NavLink, useNavigate} from "react-router-dom";

//context
import {UserContext} from './'

export const PageThree = () => {

    const {outChecking} = useContext(UserContext);

    
    return(
        
            <>
                <h1>PageThree</h1>
                <button>LogOut</button>
                
            </>
            
        )
}