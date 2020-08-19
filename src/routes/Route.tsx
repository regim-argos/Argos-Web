/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ArgosReduxStates from 'Types/ArgosReduxStates';

interface IRoutes extends RouteProps {
  Component: FC;
  isPrivate?: boolean;
  isOnlyAdmin?: boolean;
  isOnlyPublic?: boolean;
  isBoth?: boolean;
}

export default function RouteWrapper({
  Component,
  isPrivate = false,
  isBoth = false,
  ...rest
}: IRoutes) {
  const signed = useSelector<ArgosReduxStates, boolean>(
    (state) => state.auth.signed
  );

  if (!isBoth) {
    if (!signed && isPrivate) {
      return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
      return <Redirect to="/project" />;
    }
  }

  // @ts-ignore
  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
