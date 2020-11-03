import React from 'react';

import { Center, Box, Heading } from '@chakra-ui/core';

const AuthContainer: React.FC = ({ children }) => {
  return (
    <Center w="100vw" h="100vh">
      <Box
        w="100%"
        maxW="400px"
        m={[2, 2, 5, 5]}
        p="5"
        borderRadius="10px"
        shadow="0px 0px 20px 0px rgba(204, 204, 204, 1)"
        bg="#eee"
      >
        <Center mb="6">
          <Heading as="h1" color="blue.700" size="2xl">
            ARGOS
          </Heading>
        </Center>
        {children}
      </Box>
    </Center>
  );
};

export default AuthContainer;
