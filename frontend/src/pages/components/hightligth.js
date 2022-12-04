import React, { Fragment, useContext, useEffect, useState } from "react";
import ContentContext from "../../config/ContentContext";
const Highlight = () => {
    const theContext = useContext(ContentContext);

    const [dataHightligth, setDataHightligth] = useState([])

    //Pegando dados dos components
    function getComponent() {
        if (theContext.attributes !== undefined) {
            if (theContext.attributes.Components.length !== 0) {
                // eslint-disable-next-line
                theContext.attributes.Components.map(Component => {
                    if (Component.Highlight !== undefined) { setDataHightligth(Component.Highlight) };

                })
            }
        }


    }

    useEffect(() => {
        if (theContext !== undefined) getComponent()
    }, [theContext])


    return (
        <div id="highlight" className="bg-grey- section-wrap" style={{ backgroundImage: 'url(images/content/bg/5.jpg)' }}>
            <div className="bg-white-overlay90 " style={{ paddingTop: '150px', paddingBottom: '150px' }}>


                <div className="container">

                    <div className="row row-counter animation" data-animation="animation-fade-in">

                        {(dataHightligth.length !== 0) ? dataHightligth.map((itens) => {
                            const coin = (itens.coin === true) && 'R$'

                            return (



                                <div key={itens.id} className="col-sm-3">
                                    <div className="affa-counter">
                                        <h4><div style={{ display: 'inline-block', fontSize: '30px' }}>{coin}</div><span>{itens.Value}</span><div style={{ display: 'inline-block', fontSize: '30px' }}>{itens.uni}</div></h4>

                                        <p>{itens.text} </p>
                                    </div>
                                </div>
                            )
                        })
                            :
                            <Fragment>
                                <div className="col-sm-3">
                                    <div className="affa-counter">
                                        <h4><div style={{ display: 'inline-block', fontSize: '30px' }}>+R$</div><span>200</span><div style={{ display: 'inline-block', fontSize: '30px' }}>Bi</div></h4>

                                        <p>Mercado IoT até 2025 no Brasil </p>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="affa-counter">
                                        <h4>+<span>34.6</span><div style={{ display: 'inline-block', fontSize: '30px' }}>Mi</div></h4>
                                        <p>População sem água tratada no Brasil</p>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="affa-counter">
                                        <h4><div style={{ display: 'inline-block', fontSize: '30px' }}>+</div><span>103.2</span><div style={{ display: 'inline-block', fontSize: '30px' }}>Mi</div></h4>
                                        <p>População sem coleta de esgoto no Brasil </p>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="affa-counter">
                                        <h4>+<span>29.6</span><div style={{ display: 'inline-block', fontSize: '30px' }}>Mi</div></h4>

                                        <p>Hectares Irrigáveis  <br />no Brasil</p>
                                    </div>
                                </div>

                            </Fragment>}

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Highlight;