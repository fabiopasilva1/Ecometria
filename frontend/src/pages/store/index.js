import React from "react";
import ProductStorer from "./components/productStore";

const Loja = () => {



    return (
        <>

            <div id="content" className="archive-product">

                {/* .container */}
                <div className="container">

                    {/* <nav className="products-nav">
                    <div className="products-nav-txt">
                        <a className="products-nav-filter" href="#"><i className="ion ion-navicon"></i> Filter</a>
                        <p>Showing 1–12 of 144 results</p>
                    </div>
                    <div className="products-nav-options">
                        <span className="option-selected">Sort by Newness</span>
                        <ul className="options-list">
                            <li>Sort by Popularity</li>
                            <li>Sort by Average Rating</li>
                            <li className="current">Sort by Newness</li>
                            <li>Sort by Price: low to high</li>
                            <li>Sort by Price: high to low</li>
                        </ul>
                    </div>
                </nav> */}

                    {/* .row */}

                    <div className="isotope-row row" id="produtos" >

                        <ProductStorer />
                    </div>

                    {/** <div className="isotope-row row">
                        <div className="col-sm-4 col-md-3">
                            {/* 1 

                           
                           <div className="affa-product animation animated animation-fade-in-up" data-animation="animation-fade-in-up">
                                <figure className="post-thumbnail post-item-thumbnail">
                                    <a href="/loja/produto/transmissor-pressao-aflorante-lp67">
                                        <div className="post-thumbnail-overlay">
                                            <img src="/images/stores/transmissor-pressao-lp67-eco-tp-afl-ip67.jpg" alt="Thumbnail"/>
                                        </div>
                                        <img src="/images/stores/transmissor-pressao-lp67-eco-tp-afl-ip67.jpg" alt="Thumbnail"/>
                                    </a>
                                </figure>
                                <div className="post-item-txt" style={{float:"left", marginTop: "10px",marginBottom: "40px"}}>
                                    {/* <p className="post-item-cats">Categoria</p> 

                                    <h4 className="entry-title post-item-title">
                                        <a href="/loja/produto/transmissor-pressao-aflorante-lp67">Transmissor de Pressão Aflorante Ip67 - ECO-TP-AFL-IP67</a>
                                    </h4>
                                    <div className="entry-meta post-item-meta">
                                        {/* <div className="post-meta-rate">
                                        <span className="post-rate-val" style="width:90%;">4.5</span>
                                    </div> 
                                        {/* <div className="post-meta-price">
                                            <p className="price-original">R$149.90</p>
                                            <p className="price-discount">R$79.90</p>
                                        </div> 
                                    </div>
                                    {/* <a href="#" className="add-cart">
                                        <span className="current">+</span>
                                        <span className="hover">+</span>
                                    </a> 
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-sm-4 col-md-3" >
                            {/* 1 
                            <div className="affa-product animation animated animation-fade-in-up" data-animation="animation-fade-in-up">
                                <figure className="post-thumbnail post-item-thumbnail">
                                    <a href="/loja/produto/sonda-nivel-hidrostatica-012mm-eco-tnh-nano">
                                        <div className="post-thumbnail-overlay">
                                            <img src="/images/stores/sonda-nivel-hidrostatica-012mm-eco-tnh-nano.jpg" alt="Thumbnail"/>
                                        </div>
                                        <img src="/images/stores/sonda-nivel-hidrostatica-012mm-eco-tnh-nano.jpg" alt="Thumbnail"/>
                                    </a>
                                </figure>
                                <div className="post-item-txt" style={{float:"left", marginTop: "10px",marginBottom: "40px"}}>
                                    {/* <p className="post-item-cats">Categoria</p>}

                                    <h4 className="entry-title post-item-title">
                                        <a href="/loja/produto/sonda-nivel-hidrostatica-012mm-eco-tnh-nano">Sonda de Nível Hidrostática Ø12mm - ECO-TNH-NANO</a>
                                    </h4>
                                    <div className="entry-meta post-item-meta">
                                        {/* <div className="post-meta-rate">
                                        <span className="post-rate-val" style="width:90%;">4.5</span>
                                    </div> 
                                        {/* <div className="post-meta-price">
                                            <p className="price-original">R$149.90</p>
                                            <p className="price-discount">R$79.90</p>
                                        </div> 
                                    </div>
                                    {/* <a href="#" className="add-cart">
                                        <span className="current">+</span>
                                        <span className="hover">+</span>
                                    </a> 
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-sm-4 col-md-3">
                            {/* 1 
                            <div className="affa-product animation animated animation-fade-in-up" data-animation="animation-fade-in-up">
                                <figure className="post-thumbnail post-item-thumbnail">
                                    <a href="/loja/produto/indicador-local-para-transmissor-eco-ind-l">
                                        <div className="post-thumbnail-overlay">
                                            <img src="/images/stores/indicador-local-para-transmissor-eco-ind-l.jpg" alt="Thumbnail"/>
                                        </div>
                                        <img src="/images/stores/indicador-local-para-transmissor-eco-ind-l.jpg" alt="Thumbnail"/>
                                    </a>
                                </figure>
                                <div className="post-item-txt" style={{float:"left", marginTop: "10px",marginBottom: "40px"}}>
                                    {/* <p className="post-item-cats">Categoria</p> 

                                    <h4 className="entry-title post-item-title">
                                        <a href="/loja/produto/indicador-local-para-transmissor-eco-ind-l">Indicador Local para Transmissor - ECO-IND-L</a>
                                    </h4>
                                    <div className="entry-meta post-item-meta">
                                        {/* <div className="post-meta-rate">
                                        <span className="post-rate-val" style="width:90%;">4.5</span>
                                    </div> 
                                        {/* <div className="post-meta-price">
                                            <p className="price-original">R$149.90</p>
                                            <p className="price-discount">R$79.90</p>
                                        </div> 
                                    </div>
                                    {/* <a href="#" className="add-cart">
                                        <span className="current">+</span>
                                        <span className="hover">+</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-sm-4 col-md-3" >
                            {/* 1 
                            <div className="affa-product animation animated animation-fade-in-up" data-animation="animation-fade-in-up">
                                <figure className="post-thumbnail post-item-thumbnail">
                                    <a href="/loja/produto/transmissor-de-pressao-ip68-eco-tp-ip68">
                                        <div className="post-thumbnail-overlay">
                                            <img src="/images/stores/transmissor-de-pressao-ip68-eco-tp-ip68.jpg" alt="Thumbnail"/>
                                        </div>
                                        <img src="/images/stores/transmissor-de-pressao-ip68-eco-tp-ip68.jpg" alt="Thumbnail"/>
                                    </a>
                                </figure>
                                <div className="post-item-txt" style={{float:"left", marginTop: "10px",marginBottom: "40px"}}>
                                    {/* <p className="post-item-cats">Categoria</p> 

                                    <h4 className="entry-title post-item-title">
                                        <a href="/loja/produto/transmissor-de-pressao-ip68-eco-tp-ip68">Transmissor de Pressão Ip68 - ECO-TP-IP68</a>
                                    </h4>
                                    <div className="entry-meta post-item-meta">
                                        {/* <div className="post-meta-rate">
                                        <span className="post-rate-val" style="width:90%;">4.5</span>
                                    </div> 
                                        {/* <div className="post-meta-price">
                                            <p className="price-original">R$149.90</p>
                                            <p className="price-discount">R$79.90</p>
                                        </div> 
                                    </div>
                                    {/* <a href="#" className="add-cart">
                                        <span className="current">+</span>
                                        <span className="hover">+</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-sm-4 col-md-3">
                            {/* 1 
                            <div className="affa-product animation animated animation-fade-in-up" data-animation="animation-fade-in-up">
                                <figure className="post-thumbnail post-item-thumbnail">
                                    <a href="/loja/produto/sonda-de-nivel-hidrostatica-017mm-eco-tnh-micro">
                                        <div className="post-thumbnail-overlay">
                                            <img src="/images/stores/sonda-de-nivel-hidrostatica-017mm-eco-tnh-micro.jpg" alt="Thumbnail"/>
                                        </div>
                                        <img src="/images/stores/sonda-de-nivel-hidrostatica-017mm-eco-tnh-micro.jpg" alt="Thumbnail"/>
                                    </a>
                                </figure>
                                <div className="post-item-txt" style={{float:"left", marginTop: "10px",marginBottom: "40px"}} >
                                    {/* <p className="post-item-cats">Categoria</p> 

                                    <h4 className="entry-title post-item-title">
                                        <a href="/loja/produto/sonda-de-nivel-hidrostatica-017mm-eco-tnh-micro">Sonda de Nível Hidrostática Ø17mm - ECO-TNH-MICRO</a>
                                    </h4>
                                    <div className="entry-meta post-item-meta">
                                        {/* <div className="post-meta-rate">
                                        <span className="post-rate-val" style="width:90%;">4.5</span>
                                    </div> 
                                        {/* <div className="post-meta-price">
                                            <p className="price-original">R$149.90</p>
                                            <p className="price-discount">R$79.90</p>
                                        </div> 
                                    </div>
                                    {/* <a href="#" className="add-cart">
                                        <span className="current">+</span>
                                        <span className="hover">+</span>
                                    </a> 
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-sm-4 col-md-3">
                            {/* 1 
                            <div className="affa-product animation animated animation-fade-in-up" data-animation="animation-fade-in-up">
                                <figure className="post-thumbnail post-item-thumbnail">
                                    <a href="/loja/produto/sonda-de-nivel-hidrostatica-028mm-eco-tnh-sub">
                                        <div className="post-thumbnail-overlay">
                                            <img src="/images/stores/sonda-de-nivel-hidrostatica-028mm-eco-tnh-sub.jpg" alt="Thumbnail"/>
                                        </div>
                                        <img src="/images/stores/sonda-de-nivel-hidrostatica-028mm-eco-tnh-sub.jpg" alt="Thumbnail"/>
                                    </a>
                                </figure>
                                <div className="post-item-txt" style={{float:"left", marginTop: "10px",marginBottom: "40px"}}>
                                    {/* <p className="post-item-cats">Categoria</p> 

                                    <h4 className="entry-title post-item-title">
                                        <a href="/loja/produto/sonda-de-nivel-hidrostatica-028mm-eco-tnh-sub">Sonda de Nível Hidrostática Ø28mm - ECO-TNH-SUB</a>
                                    </h4>
                                    <div className="entry-meta post-item-meta">
                                        {/* <div className="post-meta-rate">
                                        <span className="post-rate-val" style="width:90%;">4.5</span>
                                    </div> 
                                        {/* <div className="post-meta-price">
                                            <p className="price-original">R$149.90</p>
                                            <p className="price-discount">R$79.90</p>
                                        </div>
                                    </div>
                                    {/* <a href="#" className="add-cart">
                                        <span className="current">+</span>
                                        <span className="hover">+</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-sm-4 col-md-3" >
                            {/* 1 
                            <div className="affa-product animation animated animation-fade-in-up" data-animation="animation-fade-in-up">
                                <figure className="post-thumbnail post-item-thumbnail">
                                    <a href="/loja/produto/transmissor-de-pressao-ip65-eco-tp">
                                        <div className="post-thumbnail-overlay">
                                            <img src="./assets/images/stores/transmissor-de-pressao-ip65-eco-tp.jpg" alt="Thumbnail"/>
                                        </div>
                                        <img src="/images/stores/transmissor-de-pressao-ip65-eco-tp.jpg" alt="Thumbnail"/>
                                    </a>
                                </figure>
                                <div className="post-item-txt" style={{float:"left", marginTop: "10px",marginBottom: "40px"}}>
                                    {/* <p className="post-item-cats">Categoria</p> 

                                    <h4 className="entry-title post-item-title">
                                        <a href="/loja/produto/transmissor-de-pressao-ip65-eco-tp">Transmissor de Pressão Ip65 - ECO-TP</a>
                                    </h4>
                                    <div className="entry-meta post-item-meta">
                                        {/* <div className="post-meta-rate">
                                        <span className="post-rate-val" style="width:90%;">4.5</span>
                                    </div> */}
                    {/* <div className="post-meta-price">
                                            <p className="price-original">R$149.90</p>
                                            <p className="price-discount">R$79.90</p>
                                        </div> 
                                    </div>
                                    {/* <a href="#" className="add-cart">
                                        <span className="current">+</span>
                                        <span className="hover">+</span>
                                    </a> 
                                </div>
                            </div>
                        </div>
                                </div>
                {/* .row end */}


                    {/* <nav className="post-paginations margin-top10">
                    <ul>
                        <li className="nav-prev"><a href="#"><i className="ion ion-ios-arrow-left"></i></a></li>
                        <li><a href="#">1</a></li>
                        <li className="current"><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li className="dots">....</li>
                        <li><a href="#">27</a></li>
                        <li className="nav-next"><a href="#"><i className="ion ion-ios-arrow-right"></i></a></li>
                    </ul>
                </nav> */}

                </div>
                {/* .container end */}

            </div>

        </>
    )

}

export default Loja;