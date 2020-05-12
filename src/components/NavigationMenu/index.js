import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { NavMenuContainer, NavButton } from './styles';

export default function NavigationMenu() {
  const SelectedTab = useLocation().pathname === '/watchers';
  const history = useHistory();

  return (
    <NavMenuContainer>
      <NavButton
        a={SelectedTab}
        type="button"
        onClick={() => history.push('/watchers')}
      >
        Watchers
      </NavButton>
      <NavButton
        a={!SelectedTab}
        type="button"
        onClick={() => history.push('/notifications')}
      >
        Notification
      </NavButton>
    </NavMenuContainer>
  );
}
