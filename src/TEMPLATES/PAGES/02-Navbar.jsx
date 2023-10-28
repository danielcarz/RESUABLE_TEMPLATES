import React, {useContext} from "react";
import { NavLink, useNavigate} from "react-router-dom";

import {UserContext} from '../../COMPONENTS/CONTEXT/01-userContext';


//styles
import '../../SASS/MIXINS/REUSABLE_MIXINS/Navbar.scss';

export const Navbar = () => {

 /*    const {user, outChecking} =  useContext(UserContext);
    const navigate = useNavigate();
    
    const onLogOut = () => {

        outChecking();
        
        navigate('/one', {
            replace: true
        })
    
    } */
  


    return(
        <nav className="navbar">
            <ul>
                <NavLink to={"/"}>TEMPLATE ONE</NavLink>
                <NavLink to={"/two"} className={({isActive}) => `${isActive ? 'active' : ''}`}>TEMPLATE TWO</NavLink>
                <NavLink to={"/three"} className={({isActive}) => `${isActive ? 'active' : '' }`}>PageThree</NavLink>
                <NavLink to={"/four"} className={({isActive}) => `${isActive ? 'active' : ''}`}>PageFour</NavLink>
                

               {/*  <div>
                    <p>{user && user.name}</p>
                    <button to={"/"} onClick={onLogOut} className={({isActive}) => `${isActive ? 'logIn' : 'logOut' }`}>logOut</button>


                </div> */}

            </ul>

            
        </nav>
    )
}