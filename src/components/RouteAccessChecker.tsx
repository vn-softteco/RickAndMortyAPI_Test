import { ROUTES } from "@/types/constants.ts";
import { Navigate, Outlet, useMatch } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/components/AuthProvider.tsx";

type RoleAccessProps = {
    roles?: string[];
};

function RouteAccessChecker({ roles }: RoleAccessProps) {
    const { user } = useContext(AuthContext);
    const isLoginRoute = useMatch(ROUTES.LOGIN);

    if (!user && !isLoginRoute) {
        return <Navigate to={ROUTES.LOGIN} />;
    }
    if (user && isLoginRoute) {
        return <Navigate to={ROUTES.CHARACTERS} />;
    }
    if (user && !roles?.includes(user.role)) {
        return <Navigate to={ROUTES.FORBIDDEN} />;
    }
    return <Outlet />;
}

export default RouteAccessChecker;
