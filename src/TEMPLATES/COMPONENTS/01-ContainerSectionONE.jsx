import React from "react";



//reusable components
import { InputButton } from "./REUSABLE_COMPONENTS/01-InputButton";


export const ContainerSectionONE = ({type}) => {


    return(
       <section className="AnnouncementButton">
            <figure className="warpperImage">


            <h1>H1: TITULO PRINCIPAL</h1>
                
                <img alt="backgroun image"></img>

                <InputButton typeButton = {type}></InputButton>


            </figure>
            
       </section>
    )
}