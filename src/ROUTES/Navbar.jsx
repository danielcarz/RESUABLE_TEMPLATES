import React, {useContext} from "react";
import { NavLink, useNavigate} from "react-router-dom";

import {UserContext} from './index';

//

//styles
import '../SASS/COMPONENTS/REUSABLE_COMPONENTS/Navbar.scss';

export const Navbar = () => {

    const {checking, outChecking} =  useContext(UserContext);
    const navigate = useNavigate();
    
    const onLogOut = () => {

        outChecking();
        
        navigate('/one', {
            replace: true
        })
    
    }
  


    return(
        <nav className="navbar">
            <ul>
                <NavLink to={"/"}>PageOne</NavLink>
                <NavLink to={"/two"} className={({isActive}) => `${isActive ? 'active' : ''}`}>PageTWO</NavLink>
                <NavLink to={"/three"} className={({isActive}) => `${isActive ? 'active' : '' }`}>PageThree</NavLink>
                

                <div>
                    <p>{checking && checking.name}</p>
                    <button to={"/"} onClick={onLogOut} className={({isActive}) => `${isActive ? 'logIn' : 'logOut' }`}>logOut</button>


                </div>

            </ul>

            
        </nav>
    )
}