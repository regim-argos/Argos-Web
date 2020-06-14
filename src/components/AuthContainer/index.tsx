import React from 'react';

import { Container } from './styles';

const AuthContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <div>
        <h1>ARGOS</h1>
        {children}
      </div>
    </Container>
  );
};

export default AuthContainer;
