import React, { useState } from 'react';
import { MdExitToApp, MdAdd } from 'react-icons/md';

import { Button } from '@material-ui/core';
import StyledButton from '../../components/RoundButton';
import WatcherList from '../../components/List';
import { Container } from './styles';

export default function Watchers() {
  const [watchers, setWatchers] = useState([
    { name: 'Regim', status: true, active: true },
    { name: 'Argos', status: false, active: true },
    { name: 'Regim API', status: true, active: false },
  ]);
  return (
    <Container>
      <div>
        <nav>
          <h1>Argos</h1>
          <StyledButton Icon={MdExitToApp} color="#C5474B" />
        </nav>
        <div>
          <div>
            {/* <input type="text" placeholder="Search" /> */}
            <StyledButton Icon={MdAdd} color="#6081F5" />
          </div>
          <ul>
            {watchers.map((watcher, index) => (
              <WatcherList key={index} watcher={watcher} />
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
