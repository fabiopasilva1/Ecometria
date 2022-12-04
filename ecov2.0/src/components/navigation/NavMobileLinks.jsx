import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ContextContent } from '../../context/contextContent';

const NavMobileLinks = () => {
    const theContext = useContext(ContextContent)
    const { contentState, contentDispatch } = theContext;
    const [dataNavigation, setDataNavigation] = useState([]);

    const [subnav, setSubnav] = useState('in')
    const [textsubnav, setTextsubnav] = useState('+')

    function onClickMobile() {
        document.body.classList.remove('nav-mobile-open');

    }
    function subMenuIn() {

        (!subnav) ? setSubnav("in") : setSubnav('');
        (!subnav) ? setTextsubnav("-") : setTextsubnav('+');

    }

    useEffect(() => {
        if (contentState.length !== 0) setDataNavigation(contentState);

    }, [contentState]);

    const Span = () => {
        return <span className={subnav}>{textsubnav}</span>
    }

    const SubNavData = (navpath) => {
        return (
            <ul className={`sub-menu in`} >
                {dataNavigation.data.map((navigation) => {
                    return (
                        <Fragment key={navigation.id}>
                            {(navigation.parent) &&
                                (navigation.parent.path === navpath) &&

                                <li className="menu-item" key={navigation.id}>
                                    <a href={`/${navigation.path}`} style={{ textTransform: 'uppercase' }} onClick={() => { onClickMobile() }}>{navigation.title}</a>
                                </li>


                            }
                        </Fragment>)
                })}
            </ul>
        )
    }


    return (
        <Fragment>
            <ul className="nav">
                {(dataNavigation.data) && dataNavigation.data.map((navigation) => {
                    return (
                        <Fragment key={navigation.id}>

                            {(navigation.audience[0] === 'primary-menu') &&

                                <li className={`menu-item ${(navigation.type === "WRAPPER") && 'menu-item-has-children'}`}  >
                                    {(navigation.type === "WRAPPER ") ?
                                        <Fragment>

                                            <Link to={`/${navigation.path}`} style={{ textTransform: 'uppercase' }}>{navigation.title} </Link>
                                            {(navigation.type === "WRAPPER") && <Span onClick={() => { subMenuIn() }} />}
                                        </Fragment>
                                        :

                                        <a href={(navigation.path !== '/') ? `/${navigation.path}` : '/'} style={{ textTransform: 'uppercase' }}>{navigation.title}</a>

                                    }

                                    {(navigation.type === "WRAPPER") && <Span />}
                                    {(navigation.type === "WRAPPER") && SubNavData(navigation.path)}
                                </li>
                            }


                        </Fragment>)
                })}
            </ul>
        </Fragment>
    )


}

export default NavMobileLinks