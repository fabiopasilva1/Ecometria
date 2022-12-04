import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NavBarsecondary = () => {



    return (
        <div className="navbar-secondary">
            <div className="navbar-btn">
                <a href="#cart" className="btn-cart"><i className="ion ion-bag"></i></a>
                <a href="#search" className="btn-search"><i className="ion ion-ios-search-strong"></i></a>
                <a href="#user" className="btn-user"><i className="ion ion-android-person"></i></a>

            </div>
            <form action="#" method="GET">
                <input type="text" name="s" placeholder="To Search start typing...." autoComplete="off" />
                <button type="button" className="btn-close"><i className="ion ion-android-close"></i></button>
            </form>
            <div className="navbar-cart">
                <div className="cart-heading">
                    <p className="cart-count">2 item(s)</p>
                    <p className="cart-price">$79.00</p>
                </div>
                <ul className="cart-list">
                    <li>
                        <a href="#" className="cart-btn-close">×</a>
                        <img src="/assets/images/content/portfolios/square/1.jpg" alt="Thumbnail" />
                        <div className="cart-content">
                            <p>1 x<span>$30</span></p>
                            <a href="#">Black Leather Dress</a>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="cart-btn-close">×</a>
                        <img src="/assets/images/content/portfolios/square/2.jpg" alt="Thumbnail" />
                        <div className="cart-content">
                            <p>1 x<span>$30</span></p>
                            <a href="#">Black Leather Dress</a>
                        </div>
                    </li>
                </ul>
                <div className="cart-footer">
                    <a href="cart.html" className="btn-custom btn-grey">Ver Carrinho</a>
                    <a href="#" className="btn-custom">Finalizar Compra</a>
                </div>
            </div>
            <div className="navbar-settings">
                <div className="settings-heading">
                    <p>Perfil</p>
                </div>
                <ul className="settings-list">
                    <li>
                        <i className="ion ion-android-options"></i>
                        <div className="settings-content">
                            <a href="#">  Minha Conta</a>
                        </div>
                    </li>
                    <li>
                        <i className="ion ion-android-playstore"></i>
                        <div className="settings-content">
                            <a href="#" >Meus pedidos</a>
                        </div>
                    </li>
                    <li>
                        <i className="ion ion-ios-paper-outline"></i>
                        <div className="settings-content">
                            <a href="#" >Meus Chamandos</a>
                        </div>
                    </li>
                </ul>
                <div className="settings-footer">
                    <a href="#" className="btn-custom btn-grey">Ver Carrinho</a>
                    <a href="#" className="btn-custom">Logout</a>
                </div>
            </div>

        </div>
    )
}
export default NavBarsecondary;