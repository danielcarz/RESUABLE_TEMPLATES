import React from "react";
import { NavLink, useNavigate} from "react-router-dom";

//styles
import '../SASS/COMPONENTS/REUSABLE_COMPONENTS/Navbar.scss';

export const Navbar = () => {

    const navigate = useNavigate();
    
    const onLogOut = () => {

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

                <button to={"/"} onClick={onLogOut} className={({isActive}) => `${isActive ? 'logIn' : 'logOut' }`}>logOut</button>

            </ul>

            
        </nav>
    )
}