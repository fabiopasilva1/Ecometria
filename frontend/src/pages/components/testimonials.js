import HTMLReactParser from "html-react-parser";
import React, { useContext, useEffect, useState } from "react";
import { apiUrl } from "../../config/api";
import ContentContext from "../../config/ContentContext";
const Testimonials = () => {

    const theContext = useContext(ContentContext);

    const [dataTestimonials, setDataTestimonials] = useState([])

    //Pegando dados dos components
    function getComponent() {

        if (theContext.attributes !== undefined) {
            if (theContext.attributes.Components.length !== 0) {
                // eslint-disable-next-line
                theContext.attributes.Components.map((Component) => {
                    if (Component.slidesCase !== undefined) { setDataTestimonials(Component.slidesCase) };



                })
            }
        }



    }

    useEffect(() => {
        if (theContext !== undefined) getComponent()
    }, [theContext])


    return (
        <div id="testimonials" className="bg-grey padding-top100 padding-bottom100">


            <div className="container">

                <div className="post-heading-center">
                    <h2>Cases</h2>
                </div>

                <div className="carousel-slider carousel-dots carousel-testimonials-startup">
                    {(!dataTestimonials.length) ?
                        <div className="slick-slide">
                            <div className="affa-testimonial-startup">
                                <p style={{ marginTop: '40px' }}>Carregando ... </p>
                            </div>
                        </div>
                        :
                        (dataTestimonials !== null) && dataTestimonials.map(itens => {

                            return (
                                <div key={itens.id} className="slick-slide">
                                    <div className="affa-testimonial-startup">
                                        <div className="testimonial-avatar">
                                            <img style={{ width: '200px', margin: '0 auto' }} src={itens.logo.data.attributes.url} alt="Avatar" />
                                        </div>

                                        <p style={{ marginTop: '40px' }}>
                                            {HTMLReactParser(itens.description)}
                                        </p>

                                    </div>
                                </div>
                            )
                        })

                    }

                </div>

            </div>
        </div>
    )
}
export default Testimonials