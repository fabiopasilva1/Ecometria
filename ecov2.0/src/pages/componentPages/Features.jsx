import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { PageContext } from '../../context/contextContent';
import HTMLReactParser from 'html-react-parser'

const Features = () => {

    const pageContent = useContext(PageContext);
    const [features, setFeatures] = useState([]);
    const url = (useParams().slug);


    useEffect(() => {
        (pageContent.related) && pageContent.related.Components.map((components) => {

            if (components.__component === 'page-component.features') {
                setFeatures(components.Features)

            }
        })
    }, [pageContent, url])

    if (features.length !== 0) {


        return (
            <Fragment>
                <div id="features" className="bg-white section-wrap padding-top70 padding-bottom40">

                    {/* .container */}
                    <div className="container">
                        <div className="post-heading-center">
                            <h2>Nossas soluções <br />para você</h2>
                            {/*<p style="font-weight: 200;">
Conheça a melhor solução para cada demanda da sua
empresa, e descubra o motivo da satisfação total dos nossos
clientes e parceiros.
</p>*/}
                        </div>

                        {/* .row */}
                        <div className="row">
                            {features.map((feat) => {
                                return (
                                    <div key={feat.id} className="col-sm-4">
                                        {/* 1 */}
                                        <div className="affa-feature-icon">
                                            {/*<i className="ion ion-calculator animation animated animation-bounce-in-down" data-animation="animation-bounce-in-down"></i>*/}
                                            {/*<h4>TELEMETRIA</h4>*/}
                                            <h4 className="animation animated animation-bounce-in-down" data-delay="300" data-animation="animation-bounce-in-down"><img src={feat.image.url} alt={feat.title} /></h4>
                                            <p>
                                                {HTMLReactParser(feat.description)}
                                            </p>
                                            <a href={feat.url_link}>{feat.text_link} <i className="ion ion-arrow-right-b"></i></a>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    {/* .container end */}

                </div>
            </Fragment>
        )
    }
}
export default Features