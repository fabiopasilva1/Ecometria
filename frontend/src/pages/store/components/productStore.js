import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import api, { apiUrl, TOKEN_API } from "../../../config/api";
import '../css/style.css'


const ProductStore = () => {

    const [data, setData] = useState([]);

    async function ReaderFile() {

        const response = await api.get('/api/products/?populate=deep', {
            headers: {
                Authorization: `bearer ${TOKEN_API}`
            }

        });


        setData(response.data.data);
        //  console.log(response)
    }

    useEffect(function () {

        if (data.length === 0) ReaderFile()


    }, [])


    return (

        <Fragment>

            {(data.length !== 0) ? data.map((product) => {

                const item = product.attributes;
                //console.log(item)
                return (

                    <div key={product.id} className="col-sm-4 col-md-3" >


                        <div className="affa-product animation animated animation-fade-in-up" dataanimation="animation-fade-in-up">
                            {(item.image.data !== null) && item.image.data.map((image) => {


                                return (
                                    <figure key={image.id} className="post-thumbnail post-item-thumbnail " >

                                        <Link to={`/produto/${item.slug}`}>


                                            <img src={image.attributes.url} alt="Thumbnail" />

                                        </Link>
                                    </figure>
                                )
                            }
                            )}

                            <div className="post-item-txt" style={{ float: "left", marginTop: "10px", marginBottom: "40px" }}>
                                {/* <p className="post-item-cats">Adicionar ao carrinho</p> */}

                                <h4 className="entry-title post-item-title">
                                    <Link to={`/produto/${item.slug}`}>{item.title}</Link>
                                </h4>

                                <div className="entry-meta post-item-meta">
                                    {/* <div className="post-meta-rate">
                                    <span className="post-rate-val" style="width:90%;">4.5</span>
                                    </div> */}
                                    {/* <div className="post-meta-price">
                                    <p className="price-original">R$149.90</p>
                                    <p className="price-discount">R$79.90</p>
                                    </div> */}
                                </div>
                                {/* <a href="#" className="add-cart">
                                    <span className="current">+</span>
                                    <span className="hover">+</span>
                                </a> */}
                            </div>

                        </div>





                    </div>



                )
            })
                : ''
            }

        </Fragment>
    )
}




export default ProductStore;