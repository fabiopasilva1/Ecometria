import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBarLogo from "./navbarlogo";
import NavContext from "../../../config/datanav/navContext"
import NavBarsecondary from "./navbarSecondary";


const NavBarLinks = () => {
    const theContext = useContext(NavContext);
    const { dataState } = theContext;
    const [SubNav, setSubNav] = useState('');

    useEffect(() => {
        if (dataState !== undefined) SubNavData()


    }, [dataState])

    function SubNavData(navpath) {
        if (dataState !== undefined) {
            return (
                

                <ul className="sub-menu">
                    {dataState.map((nav) => {
                        if (nav.parent !== null && nav.parent.path === navpath) {
                            if (nav.parent !== null) {
                                return (


                                    <li className="menu-item" key={nav.id}>
                                        {(nav.path === 'loja')? <a href={`/${nav.path}`} style={{textTransform:'uppercase'}} >{nav.tilte}</a> :
                                        <Link to={`/${nav.path}`} style={{ textTransform: 'uppercase' }}>{nav.title}</Link>
                                }
                                    </li>
                                )
                            }
                        }
                    })}


                </ul>
            )
        }
    }

    return (
        <div className='navbar' >

            <div className="container">
                <div className="navbar-wrap">
                    <NavBarLogo />


                    <div className="navbar-menu">
                        <ul className="nav">
                            {dataState.map(
                                // eslint-disable-next-line
                                (nav) => {
                                    if (nav.parent === null) {
                                        return (
                                            <li className={`menu-item ${(nav.path === 'services') ? 'menu-item-has-children' : ''}`} key={nav.id}>

                                                {

                                                    (nav.path !== '/') ?
                                                    (nav.path !== 'loja')?
                                                        <Link to={`/${nav.path}`}>{nav.title}</Link>
                                                        : <a href='/loja'>{nav.title}</a>

                                                        : <a href='/'>{nav.title}</a>

                                                }

                                                {(nav.path === 'services') ? SubNavData(nav.path) : ' '}


                                            </li>
                                        )
                                    }

                                }


                            )}
                            <NavBarsecondary />

                        </ul>
                    </div>
                </div>
            </div >


        </div >

    )
}
export default NavBarLinks;