import React, { Fragment, useContext, useEffect, useState } from 'react'
import { ContextContent, PageContext } from './contextContent'
import { useParams } from 'react-router-dom';

export const PageProvider = ({ children }) => {
    const theContext = useContext(ContextContent);
    const { contentState } = theContext;
    const [urlData, setUrlData] = useState('/')
    const [state, setState] = useState([]);

    const url = (useParams().slug);

    useEffect(() => {
        if (url === undefined) setUrlData('/')
        if (url !== undefined) setUrlData(url)
    }, [url])
    //console.log(url)



    useEffect(() => {
        (contentState.data) && contentState.data.map((s) => {
            if (s.path === urlData) {
                setState(s)

            }
        })
    })

    return (
        <PageContext.Provider value={state}>

            {children}
        </PageContext.Provider>




    )

}

