'use client';

import { Box, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

import Navigation from './components/Navigation';
import Profile from './pages/Profile';
import Security from './pages/Security';
import Support from './pages/Support';

const Index = () => {
  const [navPosition, setNavPosition] = useState<number>(1);
  return (
    <Box borderRadius="8px" boxShadow="lg" bg="text.500" p="8">
      <Stack spacing="64px">
        <Navigation navPosition={navPosition} setNavPosition={setNavPosition} />
        <Box>
          {navPosition === 1 && <Profile />}
          {navPosition === 2 && <Support />}
          {navPosition === 3 && <Security />}
        </Box>
      </Stack>
    </Box>
  );
};

export default Index;
