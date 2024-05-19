import Cookies from "js-cookie";
import { UserFromToken } from "@/types";
import { jwtDecode } from "jwt-decode";

const setToken = (token: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        return Cookies.set("token", token)
            ? resolve()
            : reject("Token set errors");
    });
};

const deleteToken = (): Promise<void> => {
    return new Promise((resolve) => {
        Cookies.remove("token");
        return resolve();
    });
};

const getAccessToken = () => Cookies.get("token");

const getUserFromToken = (): Promise<UserFromToken | null> => {
    return new Promise((resolve) => {
        const token = getAccessToken();
        console.log("GET TOKEN", token);
        return token ? resolve(jwtDecode<UserFromToken>(token)) : resolve(null);
    });
};

export default {
    setToken,
    deleteToken,
    getUserFromToken
};
