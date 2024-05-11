import { Navigate } from 'react-router-dom';


export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isSignedIn = useSelector(selectIsSignedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};