import { useLocation, Navigate } from 'react-router-dom'

import { TokenService } from '@/services'
import { ROUTES } from '@/types/constants'

type RequireAuth = {
    children: JSX.Element
}

const RequireAuth = ({ children }: RequireAuth) => {
    const location = useLocation()
    const token = TokenService.getAccessToken()

    if (!token) {
        return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
    }

    if (location.pathname === '/') {
        return <Navigate to={ROUTES.CHARACTERS} state={{ from: location }} replace />
    }

    return children
}

export default RequireAuth