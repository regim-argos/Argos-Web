/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from 'Layout';
import ArgosReduxStates from 'Types/ArgosReduxStates';

interface IRoutes extends RouteProps {
  Component: FC;
  isPrivate?: boolean;
  isOnlyAdmin?: boolean;
  isOnlyPublic?: boolean;
}

export default function RouteWrapper({
  Component,
  isPrivate = false,
  ...rest
}: IRoutes) {
  const signed = useSelector<ArgosReduxStates, boolean>(
    (state) => state.auth.signed
  );

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/watchers" />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isPrivate ? (
          <Layout Component={Component} {...props} />
        ) : (
          // @ts-ignore
          <Component {...props} />
        )
      }
    />
  );
}