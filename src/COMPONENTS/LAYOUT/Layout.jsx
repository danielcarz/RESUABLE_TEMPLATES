import React, { Children } from "react";

//styles
import '../../SASS/MIXINS/REUSABLE_COMPONENTS/Layout.scss';

export const Layout = ({children}) => {


    return(
        <div className="layoutContainer" >{children}</div>
    )
}