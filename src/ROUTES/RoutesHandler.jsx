import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

//components
import { UserProvider ,Navbar, PrivateRoutes} from './'

//Routes
import {PageOne, PageTWO, PageThree, PageFour } from './';

export const RoutesHandler = () => {


    return(

        <UserProvider>
            <BrowserRouter>

                <Navbar></Navbar>

                <Routes>
                    <Route path="/" element={<PageOne></PageOne>}></Route>
                    
                    <Route path="/three" element={<PageThree></PageThree>}></Route> 


                    <Route path="*" element={
                    
                        <PrivateRoutes>
                            <PageTWO></PageTWO>
                           

                        </PrivateRoutes>}>


                    </Route>
                </Routes>


            </BrowserRouter>

        </UserProvider>
       
        
    )
}