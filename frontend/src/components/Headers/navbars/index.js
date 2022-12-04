import React, { useEffect, useState } from "react";
import DataNav from "../../../config/datanav";
import NavContext from "../../../config/datanav/navContext";
import TopNavMobile from "./topnavMobile";



const Navbar = ({ children }) => {

    const [scroll, setScroll] = useState(true);
    const [activeClass, setActiveClass] = useState('')
    useEffect(() => {

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY < 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
                setActiveClass('affix')
            } else {
                setActiveClass('');
            }

        })

    }, []);


    return (
        <NavContext.Provider value={DataNav()}>
            <TopNavMobile />
            <nav id='navigation' className={activeClass}>
                {children}
            </nav>
        </NavContext.Provider >
    )
}
export default Navbar;