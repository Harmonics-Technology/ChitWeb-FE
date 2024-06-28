'use client';

import { Box, Stack, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

import { BackButton } from '~/lib/components/Button';

import Navigation from './components/Navigation';
import PayVendorPages from './pages';

const Index = () => {
  const [navPosition, setNavPosition] = useState<number>(0);
  return (
    <Box p="5" boxShadow="lg" borderRadius="8px" minH="500px">
      <Stack spacing="64px">
        <BackButton link="/user/payment" title="Pay Vendor" />
        <Box>
          <Flex gap="32px">
            <Navigation
              navPosition={navPosition}
              setNavPosition={setNavPosition}
            />
            <PayVendorPages
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
