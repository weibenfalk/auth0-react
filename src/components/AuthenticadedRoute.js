import React from 'react';
import { useAuth0 } from '../auth/react-auth0-spa';
import Login from './Login';

const AuthenticatedRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated === true ? <Component {...rest} /> : <Login />;
};

export default AuthenticatedRoute;
