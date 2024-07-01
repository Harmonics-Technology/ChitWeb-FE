'use client';

import { Box, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import { BackButton } from '~/lib/components/Button';

import AllRequests from './components/AllRequests';
import ReceivedRequests from './components/ReceivedRequests';
import SearchBar from './components/SearchBar';
import SentRequests from './components/SentRequests';

const Index = () => {
  const [navPosition, setNavPosition] = useState<number>(0);
  return (
    <Box
      w="100%"
      minH="400px"
      bg="text.500"
      py="3"
      px="2"
      borderRadius="8px"
    >
      <Stack spacing="32px">
        <BackButton title="Request Funds" link="/user/payment" />
        <SearchBar navPosition={navPosition} setNavPosition={setNavPosition} />
        <Box>
          {navPosition === 0 && <AllRequests />}
          {navPosition === 1 && <ReceivedRequests />}
          {navPosition === 2 && <SentRequests />}
        </Box>
      </Stack>
    </Box>
  );
};

export default Index;
