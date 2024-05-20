import Cookies from "js-cookie";
import { UserInfo } from "@/types";

const TOKEN_KEY = "token";

const getUserFromToken = (): UserInfo | undefined => {
    const token = Cookies.get(TOKEN_KEY);
    return token ? JSON.parse(token) : undefined;
}

const setUserToToken = (user: UserInfo | undefined) => {
    if (user) {
        Cookies.set(TOKEN_KEY, JSON.stringify(user));
    } else {
        Cookies.remove(TOKEN_KEY);
    }
}

export default {
    getUserFromToken,
    setUserToToken,
};
