
const ProductList = ({ data }) => {
    return (

        <>
            {data.map((products, index) => {
                const product = products.attributes

                return (
                    <div key={index} id="content" className="single-product">

                        {/* .container */}
                        <div className="container">
                            <div className="main-content">

                                {/* .post-single-txt */}
                                <div className="post-single-txt row">

                                    <div className="col-sm-7">
                                        <div className="post-thumbnail post-single-thumbnail">

                                            {/* .row */}

                                            {product.image.data.map((images, indexImage) => {
                                                const urlThumbImg = images.attributes.formats.thumbnail.url;
                                                const urlImage = images.attributes.url;

                                                return (
                                                    //  image = products.attributes

                                                    <div className="row" key={indexImage}>
                                                        <div className="col-md-2 hidden-xs hidden-sm">
                                                            <div className="carousel-slider carousel-product-thumbnails-nav slick-vertical slick-initialized slick-slider">
                                                                <div aria-live="polite" className="slick-list draggable">
                                                                    <div className="slick-track" role="listbox">
                                                                        <div className="post-item slick-slide slick-current slick-active" tabIndex="-1" role="option" aria-describedby="slick-slide00" data-slick-index="0" aria-hidden="false">
                                                                            <img src={`http://192.168.1.172:1337${urlThumbImg}`} alt="Thumbnail" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-10">
                                                            <div className="carousel-slider carousel-product-thumbnails slick-initialized slick-slider">

                                                                <div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox" >
                                                                    <div className="post-item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabIndex="-1" role="option" aria-describedby="slick-slide10">
                                                                        {/* 1 */}
                                                                        <figure className="easyzoom easyzoom--overlay">
                                                                            <a href="" className="post-item-img" tabIndex="0">
                                                                                <img src={`http://192.168.1.172:1337${urlImage}`} alt="Image" width="560" height="700" />
                                                                            </a>
                                                                        </figure>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>)
                                            })}
                                            {/* .row end */}
                                        </div>
                                    </div>
                                    <div className="col-sm-5 col-lg-4 col-lg-offset-1">
                                        <div className="entry-content post-single-content">

                                            <h1 className="entry-title post-single-title">{product.title}</h1>

                                            <div className="post-content-desc">

                                                {product.description}
                                            </div>

                                            <div className="post-content-price">

                                                <a href="https://api.whatsapp.com/send?phone=5511969493082&amp;text=Olá estou interessado no produto - Indicador Local para Transmissor - ECO-IND-L" className="btn btn-default btn-large btn-consultor" target="_blank">
                                                    Fale com consultor <img src="/images/stores/icons8-whatsapp.gif" />
                                                </a>


                                                <p>
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
                                                    {product.description}                               </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* .row end */}

                                </div>
                                {/* .post-single-tabs end */}


                                {/* .post-single-meta end */}


                            </div>

                        </div>
                        {/* .container end */}


                    </div>

                )
            })}


        </>
    )
}
export default ProductList;