import React from "react";

//components
import {AnnouncementButton, ChildrenWrapperImage, WrapperArticle, ContentElement, AnnouncementParagraph} from '../..';

//layout
import {Layout} from '../..';

export const TemplateHome = () => {


    return(

   
            <Layout>



                <h1>TemplateHome</h1>
                <AnnouncementButton></AnnouncementButton>
                <ChildrenWrapperImage>
                    <figure>
                        <img alt="picture"></img>
                        <img alt="picture"></img>
                    </figure>
                </ChildrenWrapperImage>

                <WrapperArticle></WrapperArticle>
                <ContentElement></ContentElement>
                <AnnouncementParagraph></AnnouncementParagraph>





            </Layout>


         
    )
}