import axios from "axios";


export const nickSearch = axios.create({
    baseURL: process.env.REACT_APP_LOL_URL
});

export const brisaSearch = axios.create({
    baseURL: process.env.REACT_APP_BRISA_API,
});
