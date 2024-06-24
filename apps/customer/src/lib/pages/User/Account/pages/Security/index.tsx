'use client';

import { Box, Stack, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

import { BackButton } from '~/lib/components/Button';

import Navigation from './components/Navigation';
import SecurityPages from './pages';

const Security = () => {
  const [navPosition, setNavPosition] = useState<number>(0);
  return (
    <Box w='100%'>
      <Flex gap="29px">
        <Box w='45%'>
          <Navigation
            navPosition={navPosition}
            setNavPosition={setNavPosition}
          />
        </Box>
        <Box w='55%'>
          <SecurityPages
            navPosition={navPosition}
            setNavPosition={setNavPosition}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Security;
