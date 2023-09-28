import React from "react";

//components
import {AnnouncementButton, ChildrenWrapperImage, WrapperArticle, WrapperArticleTwo, AnnouncementParagraph} from './';

export const TemplateHome = () => {


    return(

        <>
            <h1>TemplateHome</h1>
            <AnnouncementButton></AnnouncementButton>
            <ChildrenWrapperImage>
                <figure>
                    <img alt="picture"></img>
                    <img alt="picture"></img>
                </figure>
            </ChildrenWrapperImage>

            <WrapperArticle></WrapperArticle>
            <WrapperArticleTwo></WrapperArticleTwo>
            <AnnouncementParagraph></AnnouncementParagraph>

        </>
         
    )
}