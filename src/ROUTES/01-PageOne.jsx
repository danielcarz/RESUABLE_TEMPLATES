import React, {useContext} from "react";

//styles
import '../SASS/COMPONENTS/01-PageOne.scss';

//components
import { Layout } from "../COMPONENTS/LAYOUT/Layout";
import {UserContext} from './index'

export const PageOne = () => {

    const context = useContext(UserContext);

    return(
        <Layout>
            <section className="testingPage">
                <h1>TestingPage</h1>
            </section>

        </Layout>
           
        
    )
}