import axios from "axios";
import {API_URL} from "../variables";

export const instance = axios.create({
    baseURL: API_URL,
});
