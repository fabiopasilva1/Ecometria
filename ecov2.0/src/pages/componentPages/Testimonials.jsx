import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { PageContext } from '../../context/contextContent';
import HTMLReactParser from 'html-react-parser'
import Buynow from './Buynow';

const Testimonials = () => {
    const pageContent = useContext(PageContext);
    const [cases, setCases] = useState([]);
    const url = (useParams().slug);
    // console.log(pageContent)
    const [hide, setHide] = useState('hide')


    useEffect(() => {
        (pageContent.related) && pageContent.related.Components.map((components) => {

            if (components.__component === 'page-component.slide-cases') {
                setCases(components.slidesCase);
                setHide('')

            }
        })
    }, [pageContent, url])

    if (cases) {
        return (
            <Fragment>
                <Buynow vidible={hide} />
                {/* #testimonials */}
                <div id="testimonials" className={`bg-grey padding-top100 padding-bottom100 ${hide}`}>

                    {/* .container */}
                    <div className="container">

                        <div className="post-heading-center">
                            <h2>Cases</h2>
                            {/*<p style="font-weight: 200;">
    Conheça a melhor solução para cada demanda da sua
    empresa, e descubra o motivo da satisfação total dos nossos
    clientes e parceiros.
</p>*/}
                        </div>

                        {/* .carousel-slider */}
                        <div className="carousel-slider carousel-dots carousel-testimonials-startup">
                            {cases.map((c) => {
                                return (
                                    <div key={c.id} className="slick-slide">
                                        {/* 1 */}
                                        <div className="affa-testimonial-startup">
                                            <div className="testimonial-avatar">
                                                <img src={c.logo.url} alt="Avatar" />
                                            </div>

                                            {/*<h4>Excelentes resultados</h4>*/}
                                            <p >
                                                {c.description}
                                            </p>
                                            {/*<h5 className="testimonial-name">
            <strong>Sandro Lucciano</strong><span>Gerente de TI</span>
        </h5>*/}
                                        </div>
                                    </div>
                                )
                            })}


                        </div>
                        {/* .carousel-slider end */}

                    </div>
                    {/* .container end */}

                </div>
                {/* #testimonials end */}
            </Fragment>
        )
    }
}

export default Testimonials