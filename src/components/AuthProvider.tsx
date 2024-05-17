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
    isAuthenticated?: boolean;
    user?: UserFromToken;
    setUser: (user: UserFromToken) => void;
};

export const AuthContext = createContext<AuthContextProps>({
    setUser: () => null
});

export default function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState<UserFromToken>();
    const contextValue = useMemo<AuthContextProps>(
        () => ({
            user,
            setUser
        }),
        []
    );

    useEffect(() => {
        setUser(tokenService.getUserFromToken());
    }, []);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}
