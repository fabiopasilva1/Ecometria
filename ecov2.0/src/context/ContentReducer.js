import React from 'react'
import * as type from './contentTypes'

const ContentReducer = (state, action) => {

    switch (action.type) {
        case type.CONTENT_SUCCESS: {
            // console.log(action.type);
            return { ...state, data: action.payload, loading: false };

        }
        case type.CONTENT_LOAD: {
            return { ...state, loading: true }
        }
    }
    // console.log('Não encontrei a action', action.type)
    return { ...state }
}

export default ContentReducer