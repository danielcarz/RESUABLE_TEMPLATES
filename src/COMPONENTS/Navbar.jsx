import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {


    return(
        <nav>
            <ul>
                <NavLink to={"/two"}>PageOne</NavLink>
            </ul>
        </nav>
    )
}