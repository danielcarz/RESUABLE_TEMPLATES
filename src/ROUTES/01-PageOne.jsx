import React, {useContext} from "react";
import { useNavigate} from "react-router-dom";

//styles
import '../SASS/COMPONENTS/01-PageOne.scss';

//components
import { Layout } from "../COMPONENTS/LAYOUT/Layout";

//context
import {UserContext} from './index'

<<<<<<< HEAD
=======
//hooks
//import { useGetTime } from "../COMPONENTS/CUSTOM_HOOKS/01-DateTime"; countDown
import { useGetInfoByProp } from "../COMPONENTS/CUSTOM_HOOKS/03-useFilterData";



>>>>>>> 9.2-PUBLIC_ROUTES

export const PageOne = () => {

    //const context = useContext(UserContext);
    const navigate = useNavigate();

    const {onChecking} = useContext(UserContext);
    


    const onLogIn = () => {

        onChecking('daniel');
        
        navigate('/two', {
            replace: false
        })
    }

    console.log(useGetInfoByProp('Beef'));
    
    

    //countDown
    

    return(
        <Layout>
            <section className="testingPage">
<<<<<<< HEAD
                <h1>TestingPage</h1>
                
=======
                
               {/*  <p>Tiempo restante: {horas} : {minutos} : {segundos}</p> */}

               <h1>PageOne</h1>
               <button onClick={onLogIn}>LogIn</button>
>>>>>>> 9.2-PUBLIC_ROUTES
            </section>

        </Layout>
           
        
    )
}