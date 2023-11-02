import React from "react";

//components
import { ContainerSectionTWO, ContainerSectionFIVE } from '../COMPONENTS/index';

//layout
import {Layout} from '../COMPONENTS';



export const TemplateDOS = () => {

    return(
 
        <Layout>
            <h1>TEMPLATE # 2</h1>
           <ContainerSectionFIVE> </ContainerSectionFIVE>

           <ContainerSectionTWO> </ContainerSectionTWO>
            
            {/* <ChildrenWrapperImage>

                <div className="infoWrapper">
                    <p>text about something</p>
                    <InputButton></InputButton>
                </div>
                <figure>
                   
                    <img className="image" alt="picture"></img>
                </figure>
            </ChildrenWrapperImage> */}
         
           
        </Layout>
    )
}