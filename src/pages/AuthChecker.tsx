import { useLocation, Navigate } from "react-router-dom";
import { ROUTES } from "@/types/constants";
import { useContext } from "react";
import { AuthContext } from "@/components/AuthProvider.tsx";

type RequireAuth = {
    children: JSX.Element;
};

const AuthChecker = ({ children }: RequireAuth) => {
    const { pathname } = useLocation();
    const { user } = useContext(AuthContext);

    if (!user && pathname !== ROUTES.LOGIN) {
        return <Navigate to={ROUTES.LOGIN} />;
    }

    if ((user && pathname === ROUTES.LOGIN) || pathname === "/") {
        return <Navigate to={ROUTES.CHARACTERS} />;
    }

    return children;
};

export default AuthChecker;
