import HTMLReactParser from "html-react-parser";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../../config/api";
import ContentContext from "../../config/ContentContext";
const Features = () => {

    const theContext = useContext(ContentContext);

    const [dataFeatures, setDataFeatures] = useState([])

    //Pegando dados dos components
    function getComponent() {
        if (theContext.attributes !== undefined) {
            if (theContext.attributes.Components.length !== 0) {
                // eslint-disable-next-line
                theContext.attributes.Components.map((Component) => {
                    if (Component.Features !== undefined) { setDataFeatures(Component.Features) };



                })
            }
        }


    }

    useEffect(() => {
        if (theContext !== undefined) getComponent()
    }, [theContext])

    return (
        <div id="features" className="bg-white section-wrap padding-top70 padding-bottom40">

            <div className="container">
                <div className="post-heading-center">
                    <h2>Nossas Soluções <br />para você</h2>
                </div>
            </div>

            <div className="row">
                {(dataFeatures.length !== 0) ? dataFeatures.map(itens => {

                    return (

                        <div key={itens.id} className="col-sm-4">
                            <div className="affa-feature-icon">
                                <h4 className="animation animated animation-bounce-in-dow" data-delay="300" data-animation="animation-bounce-in-down">
                                    <img src={itens.image.data.attributes.url} alt={itens.title} /></h4>
                                <p>{HTMLReactParser(itens.description)}</p>

                                <Link to={itens.url_lik}>{itens.text_link} <i className="ion ion-arrow-right-b"></i></Link>
                            </div>
                        </div>


                    )
                }) : <Fragment>
                    <div className="col-sm-4">
                        <div className="affa-feature-icon">
                            <h4 className="animation animated animation-bounce-in-dow" data-delay="300" data-animation="animation-bounce-in-down"><img src="images/icons/telemetria.png" alt="" /></h4>
                            <p>Aliqua fugiat adipisicing anim anim exercitation do.<br />Aute duis elit Lorem magna sit et laborum laborum nulla adipisicing irure anim.</p>

                            <a href="/#">Saiba mais <i className="ion ion-arrow-right-b"></i></a>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="affa-feature-icon">
                            <h4 className="animation animated animation-bounce-in-dow" data-delay="300" data-animation="animation-bounce-in-down"><img src="images/icons/telemetria.png" alt="" /></h4>
                            <p>Aliqua fugiat adipisicing anim anim exercitation do.<br />Aute duis elit Lorem magna sit et laborum laborum nulla adipisicing irure anim.</p>

                            <a href="/#">Saiba mais <i className="ion ion-arrow-right-b"></i></a>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="affa-feature-icon">
                            <h4 className="animation animated animation-bounce-in-dow" data-delay="300" data-animation="animation-bounce-in-down"><img src="images/icons/telemetria.png" alt="" /></h4>
                            <p>Aliqua fugiat adipisicing anim anim exercitation do.<br />Aute duis elit Lorem magna sit et laborum laborum nulla adipisicing irure anim.</p>

                            <a href="/#">Saiba mais <i className="ion ion-arrow-right-b"></i></a>
                        </div>
                    </div>
                </Fragment>}
            </div>


        </div>
    )
}

export default Features