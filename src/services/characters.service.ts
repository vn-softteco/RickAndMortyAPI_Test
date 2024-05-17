import {API_ENDPOINTS} from "@/types/constants.ts";

const apiUrl = import.meta.env.VITE_APP_API_URL

const getCharacters = () => {
    return fetch(`${apiUrl}${API_ENDPOINTS.CHARACTERS}`);
}

export default {
    getCharacters
}