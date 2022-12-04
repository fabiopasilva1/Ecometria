import React, { Fragment, useContext, useEffect, useState } from 'react'
import { PageContext } from '../../context/contextContent'
import { useParams } from 'react-router-dom';
import '../../pages/styles/slider-pro.min.css'
import HTMLReactParser from 'html-react-parser';
export const SliderPro = () => {

    const pageContent = useContext(PageContext);
    const [sliders, setSliders] = useState([]);
    const url = (useParams().slug);


    useEffect(() => {
        (pageContent.related) && pageContent.related.Components.map((components) => {

            if (components.__component === 'page-component.slider-hero') {
                setSliders(components.slides)

            }
        })
    }, [pageContent, url])

    if (sliders.length !== 0) {


        return (
            <Fragment>

                {/* .slider-pro */}
                <div id='Hero' className="slider-pro">
                    <div className="sp-slides">
                        {sliders.map((s) => {

                            return (
                                <div key={s.id} className="sp-slide" style={{ backgroundColor: `${s.BackgroundColor}`, backgroundImage: `url('${(s.background) && s.background.url}')`, backgroundSize: 'cover' }}>

                                    <div className="header-overlay- ">
                                        <div className="container">
                                            {(s.title || s.subtitle) &&
                                                <div className="header-txt header-txt-left">

                                                    <h1 className="sp-layer sp-layer-1 " data-show-transition="right" data-show-delay="400">
                                                        {(s.title) && s.title}
                                                    </h1>

                                                    {(s.subtitle) &&
                                                        <p className="sp-layer sp-layer-1 " data-show-transition="right" data-show-delay="400">{HTMLReactParser(s.subtitle)}</p>
                                                    }
                                                </div>
                                            }
                                            {(s.content || s.image) &&
                                                <div className="sp-layer-content">

                                                    <div className={(!s.image) ? 'col1' : `col2`}>
                                                        {HTMLReactParser(s.content)}
                                                    </div>

                                                    <div className={(!s.content) ? 'col1' : 'col2'}>
                                                        <div className="sp-layer sp-layer-4" data-show-transition="left" data-show-delay="1500">
                                                            <img src={s.image.url} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                            {(s.url_video) && <iframe src={s.url_video} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true}></iframe>}

                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>
                {/* .slider-pro end */}

            </Fragment >
        )
    }
}
