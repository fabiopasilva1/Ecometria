import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { PageContext } from '../../context/contextContent';

const Highlight = () => {
    const pageContent = useContext(PageContext);
    const [highlight, sethighlight] = useState([]);
    const url = (useParams().slug);

    const [hide, setHide] = useState('hide')


    useEffect(() => {
        (pageContent.related) && pageContent.related.Components.map((components) => {

            if (components.__component === 'page-component.highlight') {
                sethighlight(components.Highlight);
                setHide('')

            }
        })
    }, [pageContent, url])



    return (
        <div id="highlight" className={`bg-grey- section-wrap ${hide}`} style={{ backgroundImage: `url(images/content/bg/5.jpg)` }}>
            <div className="bg-white-overlay90 ">


                <div className="container">


                    <div className="row row-counter animation" data-animation="animation-fade-in">

                        {(highlight.length !== 0) &&


                            highlight.map((h) => {

                                return (
                                    <div key={h.id} className="col-sm-3">

                                        <div className="affa-counter">
                                            <h4>
                                                <div >+{(h.coin) ? 'R$' : ''}</div><span>{h.Value}</span>
                                                <div>{h.uni}</div>
                                            </h4>

                                            <p>{h.text} </p>
                                        </div>
                                    </div>
                                )
                            })
                        }




                    </div>



                </div>


            </div>
        </div >
    )


}



export default Highlight