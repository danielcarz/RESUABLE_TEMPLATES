import React from "react";

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

            <span>
                <button onClick={() => onCreateElement("button1")}>Create an element 1</button>
                <button onClick={() => onCreateElement("button2")}>Create an element 2</button>
            </span>

            {displayed && <ToggleContentElement title={data}></ToggleContentElement>}


        </article>
            

        
    
    )
}