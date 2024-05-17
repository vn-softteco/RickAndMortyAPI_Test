import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { UserFromToken } from "@/types";

const setToken = (token: string) => {
    Cookies.set("token", token);
};

const deleteToken = () => {
    Cookies.remove("token");
};

const getAccessToken = () => Cookies.get("token");

const getUserFromToken = (): UserFromToken | undefined => {
    const token = getAccessToken();
    if (!token) return undefined;
    const userFromToken = jwtDecode<UserFromToken>(token);
    console.log(userFromToken);
    return userFromToken;
};

export default {
    setToken,
    deleteToken,
    getAccessToken,
    getUserFromToken
};
