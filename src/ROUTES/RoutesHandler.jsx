import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

//components
import { UserProvider ,Navbar} from './'

//templates
import {TemplateUNO } from './';


export const RoutesHandler = () => {
 

    return(

        <UserProvider>
            <BrowserRouter> 

                <Navbar></Navbar>

                
                <Routes>
                    <Route path="/" element={<TemplateUNO></TemplateUNO>}></Route>
{/*                     <Route path="/two" element={<ColombianCulture></ColombianCulture>}></Route>
 */}
                    

                    
                </Routes>


            </BrowserRouter>

        </UserProvider>
       
        
    )
}