import React from 'react';

import { MdExitToApp } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import ArgosLog from '~/assets/Ativo-5.svg';
import StyledButton from '../../components/RoundButton';
import { signOut } from '~/store/modules/auth/actions';

import { NavContainer, LogoContainer } from './styles';

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <NavContainer>
      <LogoContainer>
        <img src={ArgosLog} alt="ArgosLog" />
        <h1>Argos</h1>
      </LogoContainer>
      <div>
        <img
          src="https://ui-avatars.com/api/?name=Diogo+MAchado&background=0D8ABC&color=fff&rounded=true&bold=true&size=128"
          alt="profile"
        />
        <StyledButton
          Icon={MdExitToApp}
          color="#C5474B"
          onClick={() => dispatch(signOut())}
        />
      </div>
    </NavContainer>
  );
}
