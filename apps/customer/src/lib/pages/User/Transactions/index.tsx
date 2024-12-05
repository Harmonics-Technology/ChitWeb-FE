'use client';

import { Box, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import RecurringTransactionsList from './components/RecurringTransactionsList';
import ScheduledTransactionsList from './components/ScheduledTransactionsList';
import SearchBar from './components/SearchBar';
import TransactionsList from './components/TransactionsList';

const Index = () => {
  const [navPosition, setNavPosition] = useState<number>(0);
  return (
    <Box
      w="100%"
      minH="400px"
      bg="text.500"
      // boxShadow="xl"
      py="3"
      // px="5"
      borderRadius="8px"
    >
      <Stack spacing="32px">
        <SearchBar navPosition={navPosition} setNavPosition={setNavPosition} />
        <Box>
          {navPosition === 0 && <TransactionsList />}
          {navPosition === 1 && <ScheduledTransactionsList />}
          {navPosition === 2 && <RecurringTransactionsList />}
        </Box>
      </Stack>
    </Box>
  );
};

export default Index;
