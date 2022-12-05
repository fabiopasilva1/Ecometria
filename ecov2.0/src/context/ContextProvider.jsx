import P from 'prop-types';
import React, { useContext, useEffect, useReducer } from 'react'
import { TOKEN_API } from '../config/ComponentsAll';
import { loadContent } from './contentAction';
import { ContentData } from './contentData'
import ContentReducer from './ContentReducer'
import { ContextContent } from './contextContent'
import http from 'http';


export const ContentProvider = ({ children }) => {


    const [contentState, contentDispatch] = useReducer(ContentReducer, ContentData);
    useEffect(() => {
        const abortController = new AbortController();

        loadContent(contentDispatch, 'api/navigation/render/Navigation', {
            headers: {
                Authorization: `bearer ${TOKEN_API}`,
            },
            params: {
                populate: 'deep'
            }
        })

            .then((dispatch) => {
                dispatch();
            }).catch((error) => console.log(error.message))

        return () => {
            abortController.abort();

        }

    }, [])

    return (
        <ContextContent.Provider value={{ contentState, contentDispatch }}>
            {children}
        </ContextContent.Provider>
    )
}


ContentProvider.propType = {
    children: P.node.isRequired,
}   
