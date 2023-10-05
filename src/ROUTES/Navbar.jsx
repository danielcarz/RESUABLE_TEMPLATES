import React from "react";
import { NavLink} from "react-router-dom";

//styles
import '../SASS/COMPONENTS/REUSABLE_COMPONENTS/Navbar.scss';

export const Navbar = () => {

    

 


    return(
        <nav className="navbar">
            <ul>
                <NavLink to={"/"}>PageOne</NavLink>
                <NavLink to={"/two"} className={() => {console.log('hello class')}}>PageTWO</NavLink>
                <NavLink to={"/three"} className={({isActive}) => `${isActive ? 'active' : '' }`}>PageThree</NavLink>
            </ul>
        </nav>
    )
}