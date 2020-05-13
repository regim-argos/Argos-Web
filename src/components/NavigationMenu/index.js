import React from 'react';

import { NavMenuContainer, NavTab } from './styles';

export default function NavigationMenu() {
  return (
    <NavMenuContainer>
      <NavTab to="/watchers">
        <strong>Watchers</strong>
      </NavTab>
      <NavTab to="/notifications">
        <strong>Notification</strong>
      </NavTab>
    </NavMenuContainer>
  );
}
