import React from "react";

//style
import '../../../SASS/TEMPLATES/TURISM/02-AnnouncementButton.scss';

//components
import { InputButton } from "./REUSABLE_COMPONENTS/01-InputButton";


export const AnnouncementButton = ({type, bg}) => {


    return(
       <section className="AnnouncementButton">
            <figure className="warpperImage">


            <h1>MEDELLIN</h1>
                
                <img src={bg} alt="backgroun image"></img>
                <InputButton typeButton = {type}></InputButton>


            </figure>
            
       </section>
    )
}