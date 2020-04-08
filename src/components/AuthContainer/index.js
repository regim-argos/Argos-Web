import React from 'react';

import { Container } from './styles';

export default function AuthContainer({ children }) {
  return (
    <Container>
      <div>
        <h1>ARGOS</h1>
        {children}
      </div>
    </Container>
  );
}
