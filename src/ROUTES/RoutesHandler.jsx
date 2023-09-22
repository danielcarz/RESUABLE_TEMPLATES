import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

//components
import { UserProvider ,Navbar} from './'

//Routes
import {PageOne } from './';

export const RoutesHandler = () => {


    return(
        <UserProvider>
            <BrowserRouter>

                <Navbar></Navbar>

                <Routes>
                    <Route path="/" element={<PageOne></PageOne>}></Route>

                    <Route path="*" element={<PageOne></PageOne>}></Route>
                </Routes>


            </BrowserRouter>

        </UserProvider>
       
        
    )
}