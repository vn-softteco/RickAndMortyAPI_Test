import {
    createContext,
    PropsWithChildren,
    useEffect,
    useMemo,
    useState
} from "react";
import { UserFromToken } from "@/types";
import tokenService from "@/services/token.service.ts";

type AuthContextProps = {
    isAdmin?: boolean;
    user?: UserFromToken;
    setUser: (user: UserFromToken) => void;
};

export const AuthContext = createContext<AuthContextProps>({
    setUser: () => null
});

export default function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState<UserFromToken>();
    const [isAdmin, setIsAdmin] = useState<boolean>();
    const contextValue = useMemo<AuthContextProps>(
        () => ({
            isAdmin,
            user,
            setUser
        }),
        [user, setUser]
    );

    useEffect(() => {
        const userFromToken = tokenService.getUserFromToken();
        setUser(userFromToken);
        setIsAdmin(userFromToken?.role === "admin");
    }, []);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}
