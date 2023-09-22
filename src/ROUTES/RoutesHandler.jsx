import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

//Routes
import {PageOne } from './';

export const RoutesHandler = () => {


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageOne></PageOne>}></Route>

                <Route path="*" element={<PageOne></PageOne>}></Route>
            </Routes>


        </BrowserRouter>
        
    )
}