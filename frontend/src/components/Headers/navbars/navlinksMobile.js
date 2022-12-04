import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavContext from "../../../config/datanav/navContext"


const NavBarMobileLinks = () => {
    const theContext = useContext(NavContext)
    const { dataState } = theContext;

    const [subnav, setSubnav] = useState('in')
    const [textsubnav, setTextsubnav] = useState('+')

    function onClickMobile() {
        document.body.classList.remove('nav-mobile-open');
        if (subnav) {
            setSubnav('');
            subMenuIn();
        };
        if (subnav) {
            setTextsubnav('+');

        };
    }
    function subMenuIn() {

        (!subnav) ? setSubnav("in") : setSubnav('');
        (!subnav) ? setTextsubnav("-") : setTextsubnav('+');

    }

    useEffect(() => {
        if (dataState !== undefined) SubNavData()


    }, [dataState])


    function SubNavData(navpath) {
        if (dataState !== undefined) {
            return (

                <ul className={`sub-menu  in`}>
                    {dataState.map((nav) => {
                        if (nav.parent !== null && nav.parent.path === navpath) {
                            if (nav.parent !== null) {
                                return (


                                    <li className="menu-item " key={nav.id} >
                                        <Link to={`/${nav.path}`} onClick={onClickMobile}>{nav.title}</Link>
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

        <div className="navbar-menu">
            <ul className="nav">

                {dataState.map(
                    // eslint-disable-next-line
                    (nav) => {
                        if (nav.parent === null) {
                            return (
                                <li className={`menu-item ${(nav.path === 'services') ? 'menu-item-has-children' : ''}`} key={nav.id}>

                                    {

                                        (nav.path === 'services ') ?
                                            <Fragment>
                                                <Link to={`/${nav.path}`} style={{ textTransform: 'uppercase' }} >{nav.title}   </Link>
                                                <span className={subnav} >{textsubnav}</span>
                                            </Fragment>
                                            :
                                            (nav.path !== '/') ? 
                                            (nav.path !== 'loja')?
                                            <Link onClick={onClickMobile} to={`/${nav.path}`}  >{nav.title}   </Link>
                                            : <a href='/loja'>{nav.title}</a>
                                                : <a href='/'>{nav.title}</a>

                                    }

                                    {(nav.path === 'services') ? SubNavData(nav.path) : ' '}


                                </li>
                            )
                        }

                    }


                )}

            </ul>
        </div >




    )
}
export default NavBarMobileLinks;