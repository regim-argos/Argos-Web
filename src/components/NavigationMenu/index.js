import React from 'react';

import { NavMenuContainer, NavTab, SelectedBar } from './styles';

export default function NavigationMenu() {
  function NavTabBar({ tabName, to }) {
    return (
      <NavTab to={to}>
        <strong>{tabName}</strong>
        <div />
      </NavTab>
    );
  }

  return (
    <NavMenuContainer>
      <NavTabBar tabName="Watchers" to="/watchers" />
      <NavTabBar tabName="Notifications" to="/notifications" />
    </NavMenuContainer>
  );
}
