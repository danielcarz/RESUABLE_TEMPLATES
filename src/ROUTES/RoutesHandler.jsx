import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
//components
import { UserProvider ,Navbar} from './'

//Routes
import {PageOne, PageTWO, PageThree } from './';

export const RoutesHandler = () => {


    return(

        <UserProvider>
            <BrowserRouter>

                <Navbar></Navbar>

                <Routes>
                    <Route path="/" element={<PageOne></PageOne>}></Route>
                    <Route path="/two" element={<PageTWO></PageTWO>}></Route>
                    <Route path="/three" element={<PageThree></PageThree>}></Route>


                    <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
                </Routes>


            </BrowserRouter>

        </UserProvider>
       
        
    )
}