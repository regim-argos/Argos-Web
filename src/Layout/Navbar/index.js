import React from 'react';

import { MdExitToApp } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import StyledButton from '../../components/RoundButton';
import { signOut } from '~/store/modules/auth/actions';

import { NavContainer } from './styles';

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <NavContainer>
      <h1>Argos</h1>
      <StyledButton
        Icon={MdExitToApp}
        color="#C5474B"
        onClick={() => dispatch(signOut())}
      />
    </NavContainer>
  );
}
