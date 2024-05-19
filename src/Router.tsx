import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "@/types/constants";

import { LoginPage, CharactersPage, LocationsPage } from "@/pages";
import { AuthAccess } from "@/components";

const router = createBrowserRouter([
    {
        path: ROUTES.INITIAL_ROUTE,
        children: [
            {
                path: ROUTES.LOGIN,
                element: <LoginPage />
            },
            {
                element: <AuthAccess roles={["admin"]} />,
                children: [
                    {
                        path: ROUTES.LOCATIONS,
                        element: <LocationsPage />
                    }
                ]
            },
            {
                element: <AuthAccess roles={["user", "admin"]} />,
                children: [
                    {
                        path: ROUTES.CHARACTERS,
                        element: <CharactersPage />
                    }
                ]
            }
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
