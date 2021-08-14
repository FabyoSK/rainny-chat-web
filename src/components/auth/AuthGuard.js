import { useAuth } from '../../hooks/useAuth';
import Login from '../../pages/auth/login';

export const AuthGuard = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return <>{children}</>;
};
