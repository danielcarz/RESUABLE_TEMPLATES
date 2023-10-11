import React from "react";

//components
import {AnnouncementButton, ChildrenWrapperImage, InputButton, ContentElement, AnnouncementParagraph} from '../..';

//layout
import {Layout} from '../..';

export const ColombianCulture = () => {

    return(

        <Layout>
            <h1>ColombianCulture</h1>
            <AnnouncementButton></AnnouncementButton>
            
            <ChildrenWrapperImage>

                <div className="infoWrapper">
                    <p>text about something</p>
                    <InputButton></InputButton>
                </div>
                <figure>
                   
                    <img className="image" alt="picture"></img>
                </figure>
            </ChildrenWrapperImage>
           
        </Layout>
    )
}