import React from "react";

//style
import '../../../SASS/TEMPLATES/TURISM/04-WrapperArticle.scss';


export const WrapperArticle = () => {


    return(
        <>  
            <article className="ContainerArticle">

                <span className="ArticleTittle">
                    <h1>WrapperArticle title</h1>
                </span>

                <section className="Wrapperarticle">
                    <figure className="imageWrapper">
                        <img alt="image"></img>
                        <p>Text wrapper article</p>
                    </figure>

                    <figure className="imageWrapper">
                        <img alt="image"></img>
                        <p>Text wrapper article</p>
                        
                    </figure>


                    <figure className="imageWrapper">
                        <img alt="image"></img>
                        <p>Text wrapper article</p>
                        
                    </figure>
                </section>


            </article>
           
        </>
    )
}