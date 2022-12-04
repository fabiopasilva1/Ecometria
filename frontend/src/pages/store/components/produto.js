import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import api, { apiUrl, TOKEN_API } from "../../../config/api";

const Produto = () => {
    const [slug, setSlug] = useState([])
    let { params } = useParams();

    const [data, setData] = useState([]);



    async function getProduct() {


        const response = await api.get(`/api/products/`, {
            headers: {
                Authorization: `bearer ${TOKEN_API}`
            },
            params: {
                'filters[slug][$eq]': slug,
                populate: '*'
            }
        });

        setData(response.data.data);
        // console.log(response.data.data)

    }

    useEffect(() => {
        if (slug.length === 0) setSlug(params)
    }, [params])
    useEffect(() => {
        if (data.length === 0) getProduct()

    }, [slug])



    return (

        <Fragment>
            {data.map((product) => {
                const item = product.attributes;
                const whatsappUrl = String(`https://api.whatsapp.com/send?phone=5511969493082&amp;text=Olá estou interessado no produto - ${(item.title) && item.title}`);

                return (


                    <div key={item.id} id="content" className="single-product">

                        {/* .container */}
                        <div className="container">
                            <div className="main-content">

                                {/* .post-single-txt */}
                                <div className="post-single-txt row">

                                    <div className="col-sm-7">
                                        <div className="post-thumbnail post-single-thumbnail">

                                            {(item.image.data !== null) && item.image.data.map((image) => {

                                                return (
                                                    <div className="row" key={image.id}> {/* .row */}
                                                        <div className="col-md-2 hidden-xs hidden-sm">
                                                            <div className="carousel-slider carousel-product-thumbnails-nav slick-initialized slick-slider slick-vertical">
                                                                <div aria-live="polite" className="slick-list draggable" style={{ height: "625px" }}>
                                                                    <div className="slick-track" role="listbox" style={{ opacity: "1", height: '125px', transform: 'translate3d(0px, 0px, 0px)' }}>
                                                                        <div className="post-item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabIndex="-1" aria-selected="false" aria-describedby="slick-slide00" style={{ width: "84px" }}>

                                                                            <img src={image.attributes.formats.thumbnail.url} alt="Thumbnail" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-10">
                                                            <div className="carousel-slider carousel-product-thumbnails slick-initialized slick-slider">

                                                                <div aria-live="polite" className="slick-list draggable">
                                                                    <div className="slick-track" role="listbox" >
                                                                        <div className="post-item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabIndex="-1" aria-selected="false" aria-describedby="slick-slide10">
                                                                            {/* 1 */}
                                                                            <figure className="img-hover hover-white">
                                                                                <a href={image.attributes.url} className="post-item-img fancybox" tabIndex="0" rel="noopener norefferer" data-fancybox-group="images_gallery">
                                                                                    <img src={image.attributes.url} alt="Thumbnail" />
                                                                                </a>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* .row end */} </div>

                                                )
                                            })
                                            }

                                        </div>
                                    </div>
                                    <div className="col-sm-5 col-lg-4 col-lg-offset-1">
                                        <div className="entry-content post-single-content">

                                            <h1 className="entry-title post-single-title">{item.title}</h1>

                                            <div className="post-content-desc">

                                                {HTMLReactParser(item.description)}
                                            </div>

                                            <div className="post-content-price">

                                                <a href={HTMLReactParser("https://wa.me/send?phone=5511969493082&amp;text=Olá estou interessado no produto - " + item.title) + "<p>paragrafo</p>"} className="btn btn-default btn-large btn-consultor" target="_blank" rel="noopener noreferrer">
                                                    Fale com consultor <img src="/images/stores/icons8-whatsapp.gif" style={{ width: "20px" }} alt={item.title} />
                                                </a>


                                                <p style={{ fontSize: "20px", marginTop: "20px" }}>
                                                    Ou ligue para: 11 4305-9004
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* .post-single-txt end */}

                                {/* .post-single-tabs */}
                                <div className="post-single-tabs">

                                    {/* .row */}
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-10 col-lg-offset-1">

                                            <ul className="nav nav-tabs affa-nav-tabs">
                                                <li className="active"><a href="#product-tab1" data-toggle="tab">Descrição</a></li>
                                            </ul>

                                            <div className="tab-content">
                                                <div className="tab-pane fade active in" id="product-tab1">
                                                    {HTMLReactParser(item.text)}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* .row end */}

                                </div>
                                {/* .post-single-tabs end */}

                            </div> {/* .main-content */}

                        </div>{/* .container end */}
                    </div>

                )
            })
            }


        </Fragment>
    )
}

export default Produto;
