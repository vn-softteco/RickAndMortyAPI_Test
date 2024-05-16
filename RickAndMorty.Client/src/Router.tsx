import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import { ROUTES } from '@/types/constants'

import {
    LoginPage,
    RequireAuth,
    CharactersPage
} from '@/pages'


const router = createBrowserRouter([
    {
        path: ROUTES.LOGIN,
        element: <LoginPage />
    },
    {
        element: (
            <RequireAuth>
                <Outlet/>
            </RequireAuth>
        ),
        path: ROUTES.INITIAL_ROUTE,
        children: [
            {
                path: ROUTES.CHARACTERS,
                element: <CharactersPage/>,
            },
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

export default Router