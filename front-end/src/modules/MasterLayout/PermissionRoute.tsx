import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface IRoutes{
  component: any,
  isPermission: boolean,
  urlRedirect: string,
  path: string,
  exact: boolean
}

const PermissionRoute = ({ component, isPermission, urlRedirect, ...rest }: IRoutes) => {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        isPermission ? (
          React.createElement(component, props)
        ) : (
          <Redirect to={ urlRedirect } />
        )
      }
    />
  )
};

export default PermissionRoute;
