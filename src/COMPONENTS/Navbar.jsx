import React from "react";
import { NavLink} from "react-router-dom";

//styles
import '../SASS/COMPONENTS/REUSABLE_COMPONENTS/Navbar.scss';

export const Navbar = () => {

    

   /*  const activate = ({isActive}) => {
        console.log('the activate function executed');
        if(isActive === true){
            return 'activate'
        }
    } */


    return(
        <nav>
            <ul>
                <NavLink to={"/"}  activeclassName="activate">Marvel</NavLink>
                <NavLink to={"/two"} className={() => {console.log('hello class')}}>HEROES</NavLink>
            </ul>
        </nav>
    )
}