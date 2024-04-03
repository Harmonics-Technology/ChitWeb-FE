'use client';

import { Box, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

import Header from './components/Header';
import SideNav from './components/SideNav';
import Dashboard from './pages/Dashboard';

const Index = () => {
  const [navPosition, setNavPosition] = useState(0);
  return (
    <Box position="relative" bg="rgba(100, 100, 100, 0.1)">
      <Stack direction="row">
        <SideNav navPosition={navPosition} setNavPosition={setNavPosition} />
        <Box p="25px" position="absolute" left="18%" w="82%">
          <Stack direction="column" spacing="22px">
            <Header />
            <Box>{navPosition === 0 && <Dashboard />}</Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Index;
