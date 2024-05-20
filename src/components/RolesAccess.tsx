import { ROUTES } from "@/types/constants.ts";
import { Navigate, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/components/AuthProvider.tsx";

type RoleAccessProps = {
    roles: string[];
};

const RolesAccess = function (props: RoleAccessProps) {
    const [authRead, setAuthRead] = useState(false);
    const { user, setUser } = useContext(AuthContext);

    useEffect(() => {
        setAuthRead(true);
    }, [setUser]);

    if (authRead) {
        return user ? (
            !props.roles.length || props.roles.includes(user?.role) ? (
                <Outlet />
            ) : (
                <Navigate to={ROUTES.FORBIDDEN} />
            )
        ) : (
            <Navigate to={ROUTES.LOGIN} />
        );
    }
};

export default RolesAccess;
