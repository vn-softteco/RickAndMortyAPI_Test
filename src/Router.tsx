import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "@/types/constants";

import {
    LoginPage,
    CharactersPage,
    CharacterPage,
    ForbiddenPage
} from "@/pages";
import { RouteAccessChecker } from "@/components";

const router = createBrowserRouter([
    {
        path: ROUTES.INITIAL_ROUTE,
        element: <LoginPage />
    },
    {
        path: ROUTES.LOGIN,
        element: <LoginPage />
    },
    {
        element: <RouteAccessChecker roles={["user", "admin"]} />,
        children: [
            {
                path: ROUTES.CHARACTERS,
                element: <CharactersPage />
            },
            {
                path: ROUTES.FORBIDDEN,
                element: <ForbiddenPage />
            }
        ]
    },
    {
        element: <RouteAccessChecker roles={["admin"]} />,
        children: [
            {
                path: ROUTES.CHARACTER_BY_ID,
                element: <CharacterPage />
            }
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
