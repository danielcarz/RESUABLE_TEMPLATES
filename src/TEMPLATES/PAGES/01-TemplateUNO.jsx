/* 
ESTILOS BOTON: seleciona o edita los estilos del boton en SASS/MIXIN/RESUABLE_MIXINS/Typesbutton.scss
  -se envia el nombre del boton como prop del comoponente.

*/

import React from "react";

//components
import {ContainerSectionONE, ChildrenWrapperImage, WrapperArticle, ContentElement, AnnouncementParagraph} from '../COMPONENTS';

//layout
import {Layout} from '../COMPONENTS';

export const TemplateUNO = () => {


    return(

   
            <Layout>



                <h1>TEMPLATE # 1</h1>

                <ContainerSectionONE typeButton="StyleButton_A"></ContainerSectionONE>
{/* 
                <ChildrenWrapperImage>
                    <figure>
                        <img alt="picture"></img>
                        <img alt="picture"></img>
                    </figure>
                </ChildrenWrapperImage> */}

              {/*   <WrapperArticle></WrapperArticle> */}
                {/* <ContentElement></ContentElement> */}
                {/* <AnnouncementParagraph></AnnouncementParagraph> */}





            </Layout>


         
    )
}