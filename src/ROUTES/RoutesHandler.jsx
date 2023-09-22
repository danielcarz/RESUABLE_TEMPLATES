import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

//components
import {Navbar} from './'

//Routes
import {PageOne } from './';

export const RoutesHandler = () => {


    return(
        <BrowserRouter>

            <Navbar></Navbar>

            <Routes>
                <Route path="/" element={<PageOne></PageOne>}></Route>

                <Route path="*" element={<PageOne></PageOne>}></Route>
            </Routes>


        </BrowserRouter>
        
    )
}