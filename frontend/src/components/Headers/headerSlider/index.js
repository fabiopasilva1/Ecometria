import React, { useContext, useEffect, useState } from "react";
import ContentContext from "../../../config/ContentContext";
import HTMLReactParser from "html-react-parser";

const HeaderSlider = () => {


    const theContext = useContext(ContentContext);

    const [dataSlider, setDataSlider] = useState([])

    //Pegando dados dos components
    function getComponent() {
        (!theContext.attributes) ? console.log() :

            (!theContext.attributes.Components.length) ? console.log() :

                theContext.attributes.Components.map(
                    //eslint-disable-next-line
                    (Component) => {
                        (!Component.slides) ? console.log() :
                            setDataSlider(Component.slides);

                    })



    }

    useEffect(() => {
        if (theContext !== undefined) getComponent()
    }, [theContext])

    const SliderPro = ({ children }) => {
        return (
            <div className="slider-pro" data-js="div" style={{ background: '#000' }}>
                <div className="sp-slides" >
                    {children}
                </div>
            </div>
        )

    }

    const [SliderSP, setSliderSP] = useState([])



    useEffect(() => {
        if (dataSlider.length !== 0) setSliderSP(dataSlider)
    }, [dataSlider])



    return (
        <SliderPro>
            {(!SliderSP) ? <div className="sp-slide " style={{ height: '80vh', backgroundRepeat: 'no-repeat', backgroundColor: '#000' }}>
                <div className="header-overlay- " >
                    <div className="container">
                        <div className="header-txt header-txt-left">
                            <h4>Carregando...</h4>
                        </div>
                    </div>
                </div>
            </div>
                : SliderSP.map((itens) => {

                    return (
                        <div key={itens.id} className="sp-slide " style={{ height: '80vh', backgroundRepeat: 'no-repeat', backgroundColor: '#000', backgroundImage: `url("${(itens.background.data !== null) ? itens.background.data.attributes.url : ''}")`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                            <div className="header-overlay- " >
                                <div className="container">
                                    {(!itens.title) ? console.log() :
                                        <div className="header-txt header-txt-left">

                                            <h1 className="sp-layer sp-layer-1 " data-show-transition="right" data-show-delay="400" style={{ color: '#fff' }}>
                                                {itens.title}
                                            </h1>


                                            {(!itens.subtitle) ? console.log() :
                                                <p className="sp-layer sp-layer-1 " data-show-transition="right" data-show-delay="400" style={{ marginTop: '0', fontSize: '18px', color: '#fff' }}>
                                                    {HTMLReactParser(itens.subtitle)}</p>
                                            }
                                        </div>
                                    }
                                    {(!itens.content) ? console.log() :

                                        <div style={{ width: '100%' }}>

                                            <div style={{ width: '50%', float: 'left', marginTop: '50px', fontSize: '18px' }}>
                                                {HTMLReactParser(itens.content)}
                                            </div>

                                            {(itens.image.data !== null) &&
                                                <div style={{ width: '50%', float: 'left' }}>
                                                    <div className="sp-layer sp-layer-4" data-show-transition="left" data-show-delay="1500">
                                                        <img src={itens.image.data.attributes.url} alt="" />

                                                    </div >
                                                </div >
                                            }

                                        </div >}
                                    {
                                        (!itens.url_video) ? '' :

                                            <iframe title="vimeo-player" src={itens.url_video} width="640" height="352" frameBorder="0" allowFullScreen="" style={{ width: '100%', height: '85vh' }}></iframe>

                                    }


                                </div >
                            </div >
                        </div >
                    )
                })}
        </SliderPro >

    )
}

export default HeaderSlider