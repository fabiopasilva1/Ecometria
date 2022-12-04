import { useEffect, useState } from "react";
import api, { TOKEN_API } from "../api";

const DataNav = () => {
    const [dataState, setDataState] = useState([]);


    async function ReadAPI() {
        const response = await api.get(`/api/navigation/render/1`, {
            headers:{
                Authorization: `bearer ${TOKEN_API}`,
            },
            paramas: {
                populate: '*'
            }
        })

        setDataState(response.data)


    }
    useEffect(() => {
        if (dataState.length === 0) ReadAPI();
    }, [])


    return ({ dataState, setDataState })



}
export default DataNav;