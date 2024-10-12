import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  isAuthenticated: boolean;
  children: JSX.Element;
};
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  children,
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
