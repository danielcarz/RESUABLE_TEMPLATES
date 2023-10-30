import React from "react";

//components
import {ContainerBoxONE, ChildrenWrapperImage, InputButton, Cards, AnnouncementParagraph} from '../COMPONENTS';

//layout
import {Layout} from '../COMPONENTS';

//assets

export const ColombianCulture = () => {

    return(
 
        <Layout>
            <h1>ColombianCulture</h1>
            <ContainerBoxONE type="StyleButton_A" bg={bgimage}></ContainerBoxONE>
            
            <ChildrenWrapperImage>

                <div className="infoWrapper">
                    <p>text about something</p>
                    <InputButton></InputButton>
                </div>
                <figure>
                   
                    <img className="image" alt="picture"></img>
                </figure>
            </ChildrenWrapperImage>
            <Cards></Cards>
           
        </Layout>
    )
}