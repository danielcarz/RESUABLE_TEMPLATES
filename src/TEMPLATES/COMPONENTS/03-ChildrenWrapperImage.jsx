import React from "react";

//style
import '../../SASS/MIXINS/MIXINS_COMPONENTS/Index.scss';
//import '../../SASS/TEMPLATES/MIXINS/03.1-ChildrenWrapperImageTwo.scss';



export const ChildrenWrapperImage = ({children}) => {


    return(
        <section className="ChildrenWrapperImage ChildrenWrapperImageTwo">
            {children}
        </section>
    )
}