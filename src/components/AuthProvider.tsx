import {
    createContext,
    PropsWithChildren,
    useEffect,
    useMemo,
    useState
} from "react";
import { UserFromToken } from "@/types";
import { useGetUserFromToken } from "@/queries/token.queries.tsx";

type AuthContextProps = {
    user?: UserFromToken;
    setUser: (user: UserFromToken) => void;
    isError: boolean;
    isLoading: boolean;
    isFetched: boolean;
};

export const AuthContext = createContext<AuthContextProps>({
    setUser: () => null,
    isError: true,
    isLoading: true,
    isFetched: true
});

export default function AuthProvider({ children }: PropsWithChildren) {
    const {
        data: userFromToken,
        isError,
        isFetched,
        isLoading
    } = useGetUserFromToken();
    const [user, setUser] = useState<UserFromToken>();
    const contextValue = useMemo<AuthContextProps>(
        () => ({
            user,
            setUser,
            isError,
            isLoading,
            isFetched
        }),
        [user, setUser, isError, isFetched, isLoading]
    );

    useEffect(() => {
        console.log("userFromToken", userFromToken);
        if (!isError) setUser(undefined);
        if (userFromToken) setUser(userFromToken);
    }, [userFromToken, isError, isFetched, isLoading]);

    if (isFetched) {
        return (
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>
        );
    }
}
