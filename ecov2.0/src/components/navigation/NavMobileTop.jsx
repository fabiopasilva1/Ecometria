import React, { Fragment } from 'react'
import SecondaryNav from './SecondaryNav';


const NavMobileTop = () => {
    // nav-mobile-open
    function onClickMobile() {

        document.body.classList.toggle('nav-mobile-open');

    }
    return (
        <Fragment>
            {/* #nav-mobile-top */}
            <div id="nav-mobile-top">

                {/* .container */}
                <div className="container-fluid">
                    <div className="navmenu">

                        <button type="button" onClick={() => { onClickMobile() }} className="navbar-btn-toggle"><i className="ion ion-navicon"></i></button>

                        <div className="navbar-logo">
                            <a href="index.html"><img src="/assets/images/logo/logo-ecometria.jpg" alt="Logo" /></a> {/* site logo */}
                        </div>

                        <SecondaryNav data={{ 'visible': '' }} />

                    </div>
                </div>
                {/* .container end */}

            </div>
            {/* #nav-mobile-top end */}
        </Fragment>
    )
}

export default NavMobileTop