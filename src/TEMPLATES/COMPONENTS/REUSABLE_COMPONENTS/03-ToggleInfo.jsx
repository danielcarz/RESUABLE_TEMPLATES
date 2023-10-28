import React from "react";

//component
/* import { ContentElement } from "./"; */
import { useContentElement } from "../HOOKS/01-useAddContentElement";

export const CreatingElement = () => {

    const {onCreateElement, displayed, data} = useContentElement();

    return(
        <>
            
           

            {displayed && <ContentElement title={data}></ContentElement>}

           
        </>
    )
}