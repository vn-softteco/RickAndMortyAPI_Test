import {
    createContext,
    PropsWithChildren,
    useEffect,
    useMemo,
    useState
} from "react";
import { UserFromToken } from "@/types";
import { TokenService } from "@/services";

type AuthContextProps = {
    user?: UserFromToken;
    setUser: (user?: UserFromToken) => void;
};

export const AuthContext = createContext<AuthContextProps>({
    setUser: () => null,
});

export default function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState<UserFromToken>();
    const contextValue = useMemo<AuthContextProps>(
        () => ({ user, setUser }),
        [user, setUser]
    );

    useEffect(() => {
        const token = TokenService.getToken();
        if (token) {
            setUser(JSON.parse(token));
        }
    }, [])

    useEffect(() => {
        if (user) {
            TokenService.setToken(JSON.stringify(user));
        } else {
            TokenService.deleteToken();
        }
    }, [user])

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}
