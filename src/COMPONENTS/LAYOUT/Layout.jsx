import React, { Children } from "react";

//styles
import '../../SASS/MIXINS/REUSABLE_MIXINS/1-Index.scss';

export const Layout = ({children}) => {


    return(
        <div className="layoutContainer" >{children}</div>
    )
}