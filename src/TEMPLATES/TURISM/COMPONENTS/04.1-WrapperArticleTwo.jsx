import React, { useState } from "react";

//style
import '../../../SASS/TEMPLATES/TURISM/04.1-WrapperArticleTwo.scss';

//hook
import { useContentElement } from "./HOOKS/01-useAddContentElement";

//component
import {ToggleContentElement} from "../COMPONENTS/REUSABLE_COMPONENTS/04-ToggleContentElement";


export const ContentElement = () => {

    const {displayed, onCreateElement, data} = useContentElement();
   

    return(

        <article className="ContentElement">
            
            <span className="WrapperButtons">
                <button onClick={() => onCreateElement("button3")} className="Button">element 3</button>
                <button onClick={() => onCreateElement("button2")} className="Button">element 2</button>
                <button onClick={() => onCreateElement("button1")} className="Button">element 1</button>
            </span>

            {displayed && <ToggleContentElement title={data}></ToggleContentElement>}


        </article>
            

        
    
    )
}