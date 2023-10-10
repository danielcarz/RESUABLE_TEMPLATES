import React, {useContext} from "react";
import { useNavigate} from "react-router-dom";

//styles
import '../SASS/COMPONENTS/01-PageOne.scss';

//components
import { Layout } from "../COMPONENTS/LAYOUT/Layout";

//context
import {UserContext} from './index'

//hooks
//import { useGetTime } from "../COMPONENTS/CUSTOM_HOOKS/01-DateTime"; countDown
import { useGetInfoByProp } from "../COMPONENTS/CUSTOM_HOOKS/03-useFilterData";




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
                
               {/*  <p>Tiempo restante: {horas} : {minutos} : {segundos}</p> */}

               <h1>PageOne</h1>
               <button onClick={onLogIn}>LogIn</button>
            </section>

        </Layout>
           
        
    )
}