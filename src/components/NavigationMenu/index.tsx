import React from 'react';

import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ArgosReduxStates from 'Types/ArgosReduxStates';
import { NavMenuContainer, NavTab } from './styles';

export default function NavigationMenu() {
  const isOwner = useSelector<ArgosReduxStates, boolean | undefined>(
    (state) => state.user.isOwner
  );
  function NavTabBar({ tabName, to }: { tabName: string; to: string }) {
    return (
      <NavTab to={to}>
        <strong>{tabName}</strong>
        <div />
      </NavTab>
    );
  }
  const { url } = useRouteMatch();

  return (
    <NavMenuContainer>
      <NavTabBar tabName="Watchers" to={`${url}/watcher`} />
      <NavTabBar tabName="Notifications" to={`${url}/notification`} />
      {isOwner && <NavTabBar tabName="Users" to={`${url}/projectUsers`} />}
    </NavMenuContainer>
  );
}
