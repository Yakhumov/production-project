import { useSelector } from 'react-redux';
import { getAuthData } from 'features/authUser';
import { Navigate, useLocation } from 'react-router-dom';
import { RouterPath } from 'shared/config/RouterConfig/routerConfig';
import { useMemo } from 'react';
import { UseRoles } from 'entities/User';
import { getUserRole } from 'entities/User/model/selectors/RoleSelector/roleSelector';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UseRoles[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRole);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RouterPath.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RouterPath.forbidden} state={{ from: location }} replace />;
    }

    return children;
}
