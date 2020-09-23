import React from 'react';
import { MdVisibility, MdNotificationsActive, MdPerson } from 'react-icons/md';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ArgosReduxStates from 'Types/ArgosReduxStates';
import { IconType } from 'react-icons/lib';
import { NavMenuContainer, NavTab } from './styles';

export default function NavigationMenu() {
  const isOwner = useSelector<ArgosReduxStates, boolean | undefined>(
    (state) => state.user.isOwner
  );
  function NavTabBar({
    tabName,
    to,
    Icon,
  }: {
    tabName: string;
    to: string;
    Icon: IconType;
  }) {
    return (
      <NavTab to={to}>
        <Icon />
        <strong>{tabName}</strong>
        <div />
      </NavTab>
    );
  }
  const { url } = useRouteMatch();

  return (
    <NavMenuContainer>
      <NavTabBar Icon={MdVisibility} tabName="Watchers" to={`${url}/watcher`} />
      <NavTabBar
        Icon={MdNotificationsActive}
        tabName="Notifications"
        to={`${url}/notification`}
      />
      {isOwner && (
        <NavTabBar Icon={MdPerson} tabName="Users" to={`${url}/projectUsers`} />
      )}
    </NavMenuContainer>
  );
}
