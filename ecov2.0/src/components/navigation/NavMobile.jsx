import React, { useState } from 'react'

const NavMobile = ({ children }) => {
    // nav-mobile-open



    function onClickMobile() {
        document.body.classList.toggle('nav-mobile-open');


    }

    return (

        <nav id="nav-mobile">
            <div className="scrollbar-inner">

                <button type="button" className="navbar-btn-close" onClick={() => { onClickMobile() }}><i className="ion ion-close"></i>Fechar</button>

                <div className="navbar-menu">
                    {children}

                </div>

            </div>
        </nav>

    )
}

export default NavMobile