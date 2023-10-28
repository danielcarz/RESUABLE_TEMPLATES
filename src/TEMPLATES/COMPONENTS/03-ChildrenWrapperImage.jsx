import React from "react";

//style
import '../../SASS/TEMPLATES/TURISM/03-ChildrenWrapperImage.scss';
import '../../SASS/TEMPLATES/TURISM/03.1-ChildrenWrapperImageTwo.scss';



export const ChildrenWrapperImage = ({children}) => {


    return(
        <section className="ChildrenWrapperImage ChildrenWrapperImageTwo">
            {children}
        </section>
    )
}