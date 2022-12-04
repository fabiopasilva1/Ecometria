import Header from "../../components/header";
import Navigation from "../../components/navigation";
import NavBar from "../../components/navigation/NavBar";
import NavTop from "../../components/navigation/NavTop";
import NavMobile from "../../components/navigation/NavMobile";
import NavMobileTop from "../../components/navigation/NavMobileTop";
import BodyWrap from "../../components/BodyWrap";
import Footer from "../../components/Footer";
import { SliderPro } from "../../components/SliderPro";
import Bottom from "../../components/Footer/Bottom";
import axios from 'axios'



export { Header, Navigation, NavTop, NavBar, NavMobile, NavMobileTop, BodyWrap, Footer, Bottom, SliderPro }


export function env(env) {
    const api_env =
    {
        "API_TOKEN": process.env.REACT_APP_API_TOKEN,

        "API_URL": process.env.REACT_APP_API_URL,

        "API_PORT": process.env.REACT_APP_API_PORT
    }

    return api_env[env]


}

export const api = axios.create({ baseURL: env('API_URL') + ':' + env('API_PORT') });
export const TOKEN_API = process.env.REACT_APP_API_TOKEN;

