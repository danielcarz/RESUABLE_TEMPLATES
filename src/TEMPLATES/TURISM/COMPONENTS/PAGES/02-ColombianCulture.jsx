import React from "react";

//components
import {AnnouncementButton, ChildrenWrapperImage, InputButton, Cards, AnnouncementParagraph} from '../..';

//layout
import {Layout} from '../..';

export const ColombianCulture = () => {

    return(
 
        <Layout>
            <h1>ColombianCulture</h1>
            <AnnouncementButton type="StyleButton_A"></AnnouncementButton>
            
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