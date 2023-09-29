import React from "react";

//style
import '../../../SASS/TEMPLATES/TURISM/04-WrapperArticle.scss';


export const WrapperArticle = () => {


    return(
        <>  
            <article className="WrapperArticle">

                <div>
                    <h1>WrapperArticle title</h1>
                </div>

                <section>
                    <figure>
                        <img alt="Wrapper Article img"></img>
                        <p>Text wrapper article</p>
                    </figure>

                    <figure>
                        <img alt="Wrapper Article img"></img>
                        <p>Text wrapper article</p>
                        
                    </figure>
                </section>


            </article>
           
        </>
    )
}