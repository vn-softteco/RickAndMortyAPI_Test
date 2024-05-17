import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ROUTES } from "@/types/constants";

import { LoginPage, AuthChecker, CharactersPage } from "@/pages";

const router = createBrowserRouter([
    {
        element: (
            <AuthChecker>
                <Outlet />
            </AuthChecker>
        ),
        path: ROUTES.INITIAL_ROUTE,
        children: [
            {
                path: ROUTES.LOGIN,
                element: <LoginPage />
            },
            {
                path: ROUTES.CHARACTERS,
                element: <CharactersPage />
            }
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
