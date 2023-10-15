import React from "react";

//components
import {AnnouncementButton, ChildrenWrapperImage, InputButton, Cards, AnnouncementParagraph} from '../..';

//layout
import {Layout} from '../..';

//assets
import bgimage from  '../../ASSETS/01.3portada.jpg';

export const ColombianCulture = () => {

    return(
 
        <Layout>
            <h1>ColombianCulture</h1>
            <AnnouncementButton type="StyleButton_A" bg={bgimage}></AnnouncementButton>
            
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