import { useContext, createContext, useEffect, useState } from 'react';

import { api } from '../services/api';

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    delete api.defaults.headers.common.Authorization;
  }
};

const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const initialize = async () => {
    try {
      const accessToken = window.localStorage.getItem('accessToken');

      if (accessToken) {
        setSession(accessToken);
        const response = await api.get('/me');

        setUser(response.data);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      setIsAuthenticated(false);
    }
  };

  const login = async (username, password) => {
    const response = await api.post('/login', {
      username,
      password
    });

    const { token, id } = response.data;

    setSession(token);
    setUser({ id, username });
    setIsAuthenticated(true);
  };

  const logout = async () => {
    setIsAuthenticated(false);
    setSession(null);
  };

  const register = async (username, password) => {
    const response = await api.post('/users',
      {
        username,
        password
      });

    const { id, token } = response.data;

    setSession(token);
  };

  useEffect(() => {
    initialize();
    setIsInitialized(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isInitialized,
        isAuthenticated,
        user,
        login,
        logout,
        register
      }}
    >
      {isInitialized
        ? children
        : <h1>Hello</h1>}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;
