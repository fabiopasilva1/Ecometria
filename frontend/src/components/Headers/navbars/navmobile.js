import React from "react";
import DataNav from "../../../config/datanav";
import NavContext from "../../../config/datanav/navContext";



const NavMobile = ({ children }) => {


    // nav-mobile-open
    function onClickMobile() {

        document.body.classList.remove('nav-mobile-open');

    }


    return (
        <NavContext.Provider value={DataNav()}>
            <div id="nav-mobile">

                <div className="scroll-wrapper scrollbar-inner" style={{ position: "relative" }}>
                    <div className="scrollbar-inner scroll-content scroll-scrolly_visible" style={{ height: 'auto', marginBottom: '0px', marginRight: '0px', maxHeight: '648px' }}>
                        <button onClick={onClickMobile} type="button" className="navbar-btn-close" ><i className="ion ion-close"></i>Fechar</button>


                        {children}
                    </div>
                </div>
            </div>
        </NavContext.Provider>
    )
}
export default NavMobile;