import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api, { TOKEN_API } from "./api";

const DataApi = () => {
    const [dataState, setDataState] = useState([]);


    const location = useParams();

    const dataUrl = (location.pageName !== undefined) ? location.pageName : 'home';


    let [url, setUrl] = useState([]);



    async function ReadAPI() {
        const response = await api.get(`api/pages/`, {
            headers:{
                Authorization: `bearer ${TOKEN_API}`,
            },

            params: {
                populate: 'deep',
                'filters[slug][$eq]': dataUrl
            }
        }).then(res => {
            if (res.ok) {
                return res.json()

            }
            setDataState(res.data)
        })

    }


    useEffect(() => {
        if (location.pageName === undefined) setUrl('home')
        if (dataState.length === 0) ReadAPI()

    }, [])
    useEffect(() => {

        if (location.pageName !== undefined) setUrl(dataUrl)
        if (dataState.length !== 0) ReadAPI()
    }, [dataUrl, url])



    return ({ dataState, setDataState })



}
export default DataApi