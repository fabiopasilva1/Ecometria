import React, { Fragment, useContext, useEffect } from 'react'
import { TOKEN_API } from '../../config/ComponentsAll';
import { loadContent } from '../../context/contentAction';
import { ContextContent } from '../../context/contextContent';
import SecondaryNav from './SecondaryNav';

const NavBar = ({ children }) => {

    return (
        <Fragment>
            {/* .navbar */}
            <div className="navbar">

                {/* .container */}
                <div className="container">
                    <div className="navbar-wrap">

                        <div className="navbar-logo">
                            <a href="/"><img src="/assets/images/logo/logo-ecometria.jpg" alt="Logo" /></a> {/* site logo */}
                        </div>

                        <div className="navbar-menu">
                            {children}

                            <SecondaryNav data={{ 'visible': 'hide' }} />
                        </div>

                    </div>
                </div>
                {/* .container end */}

            </div>
            {/* .navbar end */}
        </Fragment>
    )
}

export default NavBar