import React from "react";
import logo from '../../../assets/images/logo/logo-ecometria.jpg';
const NavBarLogo = () => {
    return (
        <div className="navbar-logo">
            <a href="/">
                <img src={logo} alt="" />
            </a>
        </div>
    )
}

export default NavBarLogo;