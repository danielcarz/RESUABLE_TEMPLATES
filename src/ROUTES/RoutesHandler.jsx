import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

//components
import { UserProvider ,Navbar, PrivateRoutes} from './'

//Routes
import {PageOne, PageTWO, PageThree, PageFour } from './';
import { PublicRoutes } from "./PublicRoutes";

export const RoutesHandler = () => {


    return(

        <UserProvider>
            <BrowserRouter>

                <Navbar></Navbar>

                
                <Routes>
                    {/* public routes */}
                    <Route path="/" element={

                            <PublicRoutes>
                                <PageOne></PageOne>
                                

                            </PublicRoutes>
                        }>

                    </Route>
                    

                    {/* private routes */}
                    <Route path="*" element={
                    
                        <PrivateRoutes>
                            <PageTWO></PageTWO>
                        </PrivateRoutes>}>


                    </Route>

                    {/* private routes */}
                    <Route path="/three" element={
                    
                    <PrivateRoutes>
                       <PageThree></PageThree>
                    </PrivateRoutes>}>


                </Route>

{/*                     <Route path="/three" element={<PageThree></PageThree>}></Route> 
 */}
                </Routes>


            </BrowserRouter>

        </UserProvider>
       
        
    )
}