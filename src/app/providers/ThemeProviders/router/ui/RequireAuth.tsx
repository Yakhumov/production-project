import { useSelector } from "react-redux";
import { getAuthData } from "features/authUser";
import { Navigate, useLocation } from "react-router-dom";
import { RouterPath } from "shared/config/RouterConfig/routerConfig";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useSelector(getAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RouterPath.main} state={{ from: location }} replace />;
  }

  return children;  
}
