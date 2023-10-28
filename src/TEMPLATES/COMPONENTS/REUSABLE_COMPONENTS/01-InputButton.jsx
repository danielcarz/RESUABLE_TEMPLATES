import React from "react";
import { Button } from "react-bootstrap";

//styles

import '../../../SASS/TEMPLATES/TURISM/02-AnnouncementButton.scss';



export const InputButton = ({typeButton}) => {

    return(
        
        <Button className={typeButton}>{typeButton}</Button>
    )
}