import { ROUTES } from "@/types/constants.ts";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/components/AuthProvider.tsx";

type RoleAccessProps = {
    roles: string[];
};

function RouteAccessChecker ({ roles }: RoleAccessProps) {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to={ROUTES.LOGIN} />;
    }
    if (!roles.includes(user.role)) {
        return <Navigate to={ROUTES.FORBIDDEN} />;
    }
    return <Outlet />
}

export default RouteAccessChecker;
