import axios from "axios";

const apiUrl = 'http://localhost:8000/';
export const instance = axios.create({
    baseURL: apiUrl,
});
