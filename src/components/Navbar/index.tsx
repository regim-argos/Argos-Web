import React from 'react';

import { MdExitToApp } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import ArgosLog from 'assets/Ativo-5.svg';
import { signOut } from 'store/modules/auth/actions';

import RoundButton from 'components/RoundButton';
import { Link } from 'react-router-dom';
import { NavContainer, LogoContainer } from './styles';

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <NavContainer>
      <Link to="/project">
        <LogoContainer>
          <img src={ArgosLog} alt="ArgosLog" />
          <h1>Argos</h1>
        </LogoContainer>
      </Link>
      <div>
        <img
          src="https://ui-avatars.com/api/?name=Diogo+MAchado&background=0D8ABC&color=fff&rounded=true&bold=true&size=128"
          alt="profile"
        />
        <RoundButton
          Icon={MdExitToApp}
          color="#C5474B"
          onClick={() => dispatch(signOut())}
        />
      </div>
    </NavContainer>
  );
}
