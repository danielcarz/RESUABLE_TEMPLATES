import React from "react";

//component
import {Footer} from './index';



export const ContainerSectionFIVE = () => {


    return(

        <Footer>
            <div class="column clase1">

                <section>
                    <h2>Título de la Columna 1</h2>
                    <span>Subtítulo de la Columna 1</span>
                </section>

                <p>Contenido de la columna 1</p>

            </div>

           

            <div class="column clase2">
                
                    <div className="column-wrapperONE">

                        <h3>Encabezado 1</h3>
                        <h3>Encabezado 2</h3>
                        <h3>Encabezado 3</h3>
                        <h3>Encabezado 4</h3>


                    </div>

                    <div className="column-wrapperTWO">
                        <h3>Encabezado 5</h3>
                        <h4>Subencabezado 1</h4>
                        <h4>Subencabezado 2</h4>
                        <h4>Subencabezado 3</h4>
                        <h4>Subencabezado 4</h4>


                    </div>
                
                
            </div>


            <div class="column clase3">
                <section>
                    <h2>Título de la Columna 3</h2>

                    <div class="wrapperSocialMedia">

                        <figure>
                            <img src="imagen1.jpg" alt="Imagen 1" />
                            <p>Descripción de la Imagen 1</p>

                        </figure>
                        <figure>
                            <img src="imagen2.jpg" alt="Imagen 2" />
                            <p>Descripción de la Imagen 2</p>
                        </figure>
                        <figure>
                            <img src="imagen3.jpg" alt="Imagen 3"/>
                            <p>Descripción de la Imagen 3</p>
                        </figure>
                    </div>
                </section>
                <p>Contenido de la columna 3</p>
            </div>

            <div class="column clase4">
                <div>
                    <h3>Título del Primer Div de Clase 4</h3>
                    <p>Contenido del Primer Div de Clase 4</p>
                </div>

                <div>
                    <section>
                    <h2>Comunícate con nosotros</h2>
                    <p>¿Tienes alguna pregunta? ¡Contáctanos!</p>
                    <a href="pagina-de-contacto.html" class="button">Contacto</a>
                    </section>
                </div>
            </div>
    </Footer>
    )
}