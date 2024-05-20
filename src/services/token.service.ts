import Cookies from "js-cookie";

const getToken = () => {
    return Cookies.get("token");
};

const setToken = (token: string) => {
    Cookies.set("token", token);
};

const deleteToken = () => {
    Cookies.remove("token");
};

export default {
    getToken,
    setToken,
    deleteToken
};
