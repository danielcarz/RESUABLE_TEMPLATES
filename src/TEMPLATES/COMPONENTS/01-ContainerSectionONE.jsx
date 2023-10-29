import React from "react";

//styles
import '../../SASS/MIXINS/MIXINS_COMPONENTS/Index.scss';


//reusable components
import { InputButton } from "./REUSABLE_COMPONENTS/01-InputButton";


export const ContainerSectionONE = ({ typeButton }) => {


    return(
       <section className="containerSectionOne">
       <div>SECTION ONE</div>
            <figure className="warpperImage">

            

                <h1>H1: TITULO PRINCIPAL </h1>
                    
                    <img alt="background image"></img>

                    <InputButton typeButton = { typeButton }></InputButton>


            </figure>
            
       </section>
    )
}