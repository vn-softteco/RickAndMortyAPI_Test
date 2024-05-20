import {
    createContext,
    PropsWithChildren,
    useEffect,
    useMemo,
    useState
} from "react";
import { UserInfo } from "@/types";
import { TokenService } from "@/services";
import CircularProgress from "@mui/material/CircularProgress";

type AuthContextProps = {
    user?: UserInfo;
    setUser: (user?: UserInfo) => void;
};

export const AuthContext = createContext<AuthContextProps>({
    setUser: () => null,
});

export default function AuthProvider({ children }: PropsWithChildren) {
    const [isAppInitialized, setApInitialized] = useState(false);
    const [user, setUser] = useState<UserInfo>();
    const contextValue = useMemo<AuthContextProps>(
        () => ({ user, setUser }),
        [user, setUser]
    );

    useEffect(() => {
        setApInitialized(true);
        setUser(TokenService.getUserFromToken());
    }, [])

    useEffect(() => {
        if (isAppInitialized) {
            TokenService.setUserToToken(user);
        }
    }, [isAppInitialized, user])

    if (!isAppInitialized) {
        return <CircularProgress />
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}
