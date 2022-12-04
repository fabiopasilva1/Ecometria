import * as types from './contentTypes';
import { api } from '../config/ComponentsAll';
import axios from 'axios';

export const loadContent = async (dispatch, url, options) => {

    const contentRaw = await api.get(url, options);

    const content = contentRaw.data;


    return () => dispatch({ type: types.CONTENT_SUCCESS, payload: content });

}