import React from "react"
import NavBarLogo from "./navbarlogo"
import NavBarsecondary from "./navbarSecondary"
const TopNavMobile = ({ children }) => {

    function onClick() {
        document.body.classList.add('nav-mobile-open')
    }
    const ButtonMobile = () => {
        return (
            <button onClick={onClick} type="button" className="navbar-btn-toggle">
                <i className="ion ion-navicon"></i>
            </button>
        )
    }

    return (
        <div id="nav-mobile-top">
            {/*<!-- .container -->*/}
            <div className="container-fluid">
                <div className="navmenu">
                    <NavBarLogo />
                    <ButtonMobile />

                    <NavBarsecondary />
                    {children}

                </div>
            </div>
            {/*<!-- .container end -->*/}
        </div>

    )

}


export default TopNavMobile;