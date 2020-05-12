import React from 'react';

import NavBar from './Navbar';
import NavigationMenu from '../components/NavigationMenu';
import { Container, Box } from './styles';

export default function Layout({ Component, ...props }) {
  return (
    <Container id="Contasiner">
      <Box>
        <NavBar />
        <NavigationMenu />
        <Component {...props} />
      </Box>
    </Container>
  );
}
