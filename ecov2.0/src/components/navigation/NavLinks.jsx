import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ContextContent } from '../../context/contextContent';

const NavLinks = () => {
    const theContext = useContext(ContextContent)
    const { contentState, contentDispatch } = theContext;
    const [dataNavigation, setDataNavigation] = useState([]);

    useEffect(() => {
        if (contentState.length !== 0) setDataNavigation(contentState);
    }, [contentState]);

    const SubNavData = (navpath) => {
        return (
            <ul className='sub-menu'>
                {dataNavigation.data.map((navigation) => {
                    return (
                        <Fragment key={navigation.id}>
                            {(navigation.parent) &&
                                (navigation.parent.path === navpath) &&

                                <li className="menu-item" key={navigation.id}>
                                    <a href={`/${navigation.path}`} style={{ textTransform: 'uppercase' }}>{navigation.title}</a>
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
                    return (<Fragment key={navigation.id}>

                        {(navigation.audience[0] === 'primary-menu') &&

                            <li className={`menu-item ${(navigation.type === "WRAPPER") && 'menu-item-has-children'}`}  >
                                <a href={(navigation.path !== '/') ? `/${navigation.path}` : '/'}>{navigation.title}</a>
                                {(navigation.type === "WRAPPER") && SubNavData(navigation.path)}
                            </li>
                        }


                    </Fragment>)
                })}
            </ul>
        </Fragment>
    )


}

export default NavLinks