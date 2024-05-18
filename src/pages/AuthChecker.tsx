import { useLocation, Navigate } from "react-router-dom";
import { ROUTES } from "@/types/constants";
import { useContext } from "react";
import { AuthContext } from "@/components/AuthProvider.tsx";

type RequireAuth = {
    children: JSX.Element;
};

const AuthChecker = ({ children }: RequireAuth) => {
    const location = useLocation();
    const auth = useContext(AuthContext);

    if (!auth.user && location.pathname !== ROUTES.LOGIN) {
        return (
            <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
        );
    }

    if (auth.user && location.pathname === ROUTES.LOGIN) {
        return (
            <Navigate
                to={ROUTES.CHARACTERS}
                state={{ from: location }}
                replace
            />
        );
    }

    if (location.pathname === "/") {
        return (
            <Navigate
                to={ROUTES.CHARACTERS}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
};

export default AuthChecker;
