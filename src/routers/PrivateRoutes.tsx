import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, ...rest }: any) => {
  const isAuthenticated = true;

  // const { isAuthenticated } = useSelector((state: AppState) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        }

        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export default PrivateRoutes;
