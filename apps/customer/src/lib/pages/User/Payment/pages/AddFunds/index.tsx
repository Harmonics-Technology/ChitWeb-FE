'use client';

import { Box, Stack, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

import { BackButton } from '~/lib/components/Button';

import Navigation from './components/Navigation';
import AddFundsPages from './Pages';

const Index = () => {
  const [navPosition, setNavPosition] = useState<number>(0);
  return (
    <Box py="5" px='2'>
      <Stack spacing="64px">
        <BackButton link="/user/payment" title="Add Funds" />
        <Box>
          <Flex gap="25px">
            <Navigation
              navPosition={navPosition}
              setNavPosition={setNavPosition}
            />
            <AddFundsPages
              navPosition={navPosition}
              setNavPosition={setNavPosition}
            />
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Index;
