import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

//components
import { UserProvider ,Navbar, PrivateRoutes} from './'

//Routes
import {TemplateHome, ColombianCulture } from './';


export const RoutesHandler = () => {


    return(

        <UserProvider>
            <BrowserRouter>

                <Navbar></Navbar>

                
                <Routes>
                    <Route path="/" element={<TemplateHome></TemplateHome>}></Route>
                    <Route path="/two" element={<ColombianCulture></ColombianCulture>}></Route>

                    

                    
                </Routes>


            </BrowserRouter>

        </UserProvider>
       
        
    )
}