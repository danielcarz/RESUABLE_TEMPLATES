import React from "react";

//style
import '../../../SASS/TEMPLATES/TURISM/02-AnnouncementButton.scss';

//components
import { InputButton } from "./REUSABLE_COMPONENTS/01-InputButton";


export const AnnouncementButton = ({type}) => {


    return(
       <section className="AnnouncementButton">
            <h1>Tittle Annuncement</h1>
            <InputButton typeButton = {type}></InputButton>
            
       </section>
    )
}