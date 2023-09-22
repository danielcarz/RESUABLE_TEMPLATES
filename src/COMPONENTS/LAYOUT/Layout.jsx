import React, { Children } from "react";

//styles
import '../../SASS/COMPONENTS/REUSABLE_COMPONENTS/Layout.scss';

export const Layout = ({children}) => {


    return(
        <div className="layoutContainer" >{children}</div>
    )
}