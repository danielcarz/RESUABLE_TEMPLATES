/* 
ESTILOS BOTON: seleciona o edita los estilos del boton en SASS/MIXIN/RESUABLE_MIXINS/Typesbutton.scss
  -se envia el nombre del boton como prop del comoponente.

*/

import React from "react";

//components
import {Layout, ContainerSectionONE, ContainerSectionThree, ContainerSectionFour, ContentElement, AnnouncementParagraph} from '../COMPONENTS';



export const TemplateUNO = () => {


    return(

   
            <Layout>



                <h1>TEMPLATE # 1</h1>

                <ContainerSectionONE typeButton="StyleButton_B"></ContainerSectionONE>

                
                
                <ContainerSectionThree>
                SECTION THREE
                    <figure>
                    figure tag
                        <img alt="picture"></img>
                        <img alt="picture"></img>
                    </figure>
                </ContainerSectionThree>

                <ContainerSectionFour>SECTION FOUR</ContainerSectionFour>
                
                {/* <ContentElement></ContentElement> */}
                {/* <AnnouncementParagraph></AnnouncementParagraph> */}





            </Layout>


         
    )
}