import React, { Fragment, useContext, useEffect, useState } from 'react'
import { ContextContent } from '../../context/contextContent'
import { useParams } from 'react-router-dom'

const Header = ({ children }) => {
    const theContent = useContext(ContextContent)
    const { contentState } = theContent

    const [classHeader, setClassHeader] = useState('header-page')
    const url = (useParams().slug);
    const [urlData, setUrlData] = useState('');

    useEffect(() => {
        if (url === undefined) setUrlData('/');
        if (url !== undefined) setUrlData(url)
    }, [url])

    useEffect(() => {
        if (contentState.data !== 0) {
            contentState.data.map((data) => {
                if (data.path === urlData) {
                    if (data.related && data.related.Components.length !== 0) {
                        setClassHeader('')
                        //console.log(data.related.Components)

                    }
                    else {
                        setClassHeader('header-page')
                    }
                }
            }
            )
        }


    }, [contentState, urlData])

    return (
        <Fragment>
            <header id='header' className={classHeader}>
                {children}
            </header>
        </Fragment>

    )
}

export default Header