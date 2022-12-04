import axios from "axios";
import { env } from "./config";

const api = axios.create({ baseURL: env('API_URL') + ':' + env('API_PORT') });

export default api;

export const TOKEN_API = process.env.REACT_APP_API_TOKEN;

export const apiUrl = env('API_URL') + ':' + env('API_PORT');
