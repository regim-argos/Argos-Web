import React from 'react';
import { useLocation } from 'react-router-dom';

import history from '../../services/history';

import { NavMenuContainer, NavButton } from './styles';

export default function NavigationMenu() {
  const SelectedTab = useLocation().pathname === '/watchers';

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
