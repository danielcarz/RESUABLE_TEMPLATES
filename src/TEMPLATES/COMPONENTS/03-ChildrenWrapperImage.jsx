import React from "react";

//style
import '../../SASS/TEMPLATES/MIXINS/03-ChildrenWrapperImage.scss';
import '../../SASS/TEMPLATES/MIXINS/03.1-ChildrenWrapperImageTwo.scss';



export const ChildrenWrapperImage = ({children}) => {


    return(
        <section className="ChildrenWrapperImage ChildrenWrapperImageTwo">
            {children}
        </section>
    )
}