import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "@/types/constants";

import { LoginPage, CharactersPage } from "@/pages";
import { AuthAccess } from "@/components";
import CharacterPage from "./pages/CharacterPage.tsx";

const router = createBrowserRouter([
    {
        path: ROUTES.INITIAL_ROUTE,
        children: [
            {
                path: ROUTES.LOGIN,
                element: <LoginPage />
            },

            {
                element: <AuthAccess roles={["user", "admin"]} />,
                children: [
                    {
                        path: ROUTES.CHARACTERS,
                        element: <CharactersPage />
                    }
                ]
            },
            {
                element: <AuthAccess roles={["admin"]} />,
                children: [
                    {
                        path: ROUTES.CHARACTER_BY_ID,
                        element: <CharacterPage />
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
