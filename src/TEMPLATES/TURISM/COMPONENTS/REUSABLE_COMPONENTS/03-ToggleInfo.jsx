import React from "react";

//component
import { ContentElement } from "./04-ToggleContentElement";
import { useContentElement } from "../HOOKS/01-useAddContentElement";

const CreatingElement = () => {

    const {onCreateElement, displayed, data} = useContentElement();

    return(
        <>
            
           

            {displayed && <ContentElement title={data}></ContentElement>}

           
        </>
    )
}