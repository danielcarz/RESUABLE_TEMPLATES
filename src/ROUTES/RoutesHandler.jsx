import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
//components
import { UserProvider ,Navbar} from './'

//Routes
<<<<<<< HEAD
import {PageOne, PageTWO, PageThree } from './';
=======
import {TemplateHome, ColombianCulture } from './';

>>>>>>> TESTING

export const RoutesHandler = () => {


    return(

        <UserProvider>
            <BrowserRouter>

                <Navbar></Navbar>

                <Routes>
<<<<<<< HEAD
                    <Route path="/" element={<PageOne></PageOne>}></Route>
                    <Route path="/two" element={<PageTWO></PageTWO>}></Route>
                    <Route path="/three" element={<PageThree></PageThree>}></Route>


                    <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
=======
                    <Route path="/" element={<TemplateHome></TemplateHome>}></Route>
                    <Route path="/two" element={<ColombianCulture></ColombianCulture>}></Route>

                    

                    
>>>>>>> TESTING
                </Routes>


            </BrowserRouter>

        </UserProvider>
       
        
    )
}