import React from "react";

//styles

import '../../SASS/TEMPLATES/MIXINS/01-ContainerSectionOne.scss';


//reusable components
import { InputButton } from "./REUSABLE_COMPONENTS/01-InputButton";


export const ContainerSectionONE = ({ typeButton }) => {


    return(
       <section className="containerSectionOne">
       CONTAINER ContainerSectionONE
            <figure className="warpperImage">

            

            <h1>H1: TITULO PRINCIPAL </h1>
                
                <img alt="backgroun image"></img>

                <InputButton typeButton = { typeButton }></InputButton>


            </figure>
            
       </section>
    )
}