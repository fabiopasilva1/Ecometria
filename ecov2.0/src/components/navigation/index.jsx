import React from "react";
import { Fragment, useContext } from "react";
import { ContextContent } from "../../context/contextContent";

const Navigation = ({ children }) => {


    // (dataNavigation) && dataNavigation.map((nav) => {

    //     const { order, id, title, type, path, audience, parent, uiRouterKey } = nav;
    //     // console.log(title)
    // })
    return (
        <Fragment>
            {/* #navigation */}
            <nav id="navigation">

                {children}

            </nav>
            {/* #navigation end */}
        </Fragment>
    )
}
export default Navigation;