import React from 'react';

import { useRouteMatch } from 'react-router-dom';
import { NavMenuContainer, NavTab } from './styles';

export default function NavigationMenu() {
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
    </NavMenuContainer>
  );
}
