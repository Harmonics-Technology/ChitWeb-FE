'use client';

import { Box, Stack, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

import { BackButton } from '~/lib/components/Button';

import Navigation from './components/Navigation';
import SecurityPages from './pages';

const Security = () => {
  const [navPosition, setNavPosition] = useState<number>(0);
  return (
    <Box>
      <Stack spacing="64px">
        <Box>
          <Flex gap="32px">
            <Navigation
              navPosition={navPosition}
              setNavPosition={setNavPosition}
            />
            <SecurityPages
              navPosition={navPosition}
              setNavPosition={setNavPosition}
            />
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Security;
