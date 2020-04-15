import React from 'react';

import NavBar from './Navbar';
import { Container, Box } from './styles';

export default function Layout({ Component, ...props }) {
  return (
    <Container id="Contasiner">
      <Box>
        <NavBar />
        <Component {...props} />
      </Box>
    </Container>
  );
}
