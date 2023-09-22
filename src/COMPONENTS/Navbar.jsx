import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {


    return(
        <nav>
            <ul>
                <NavLink to={"/"}>PageOne</NavLink>
            </ul>
        </nav>
    )
}