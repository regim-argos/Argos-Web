import React, { useMemo } from 'react';

import { MdExitToApp } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import ArgosLog from 'assets/Ativo-5.svg';
import { signOut } from 'store/modules/auth/actions';

import RoundButton from 'components/RoundButton';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import ArgosReduxStates from 'Types/ArgosReduxStates';
import IUser from 'Types/IUser';
import { NavContainer, LogoContainer } from './styles';

export default function Navbar() {
  const dispatch = useDispatch();

  const user = useSelector<ArgosReduxStates, IUser | null>(
    (state) => state.user.profile
  );

  const initial = useMemo(() => {
    if (user) {
      const initialsRegx = user.name.match(/\b\w/g) || [];
      return (
        (initialsRegx.shift() || '') + (initialsRegx.pop() || '')
      ).toUpperCase();
    }
    return '';
  }, [user]);

  return (
    <NavContainer>
      <Link to="/project">
        <LogoContainer>
          <img src={ArgosLog} alt="ArgosLog" />
          <h1>Argos</h1>
        </LogoContainer>
      </Link>
      <div>
        <Avatar
          style={{
            backgroundColor: '#0D8ABC',
            height: '35px',
            width: '35px',
            marginRight: '10px',
            boxShadow: '0px 0px 6px 2px rgba(0, 0, 0, 0.3)',
          }}
          alt={user?.name || ''}
        >
          {initial}
        </Avatar>
        <RoundButton
          text="SingOut"
          Icon={MdExitToApp}
          color="#C5474B"
          onClick={() => dispatch(signOut())}
        />
      </div>
    </NavContainer>
  );
}
