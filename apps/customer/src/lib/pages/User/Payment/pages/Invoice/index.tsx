'use client';

import { Box, Stack } from '@chakra-ui/react';
import React from 'react';

import { BackButton } from '~/lib/components/Button';

import SearchBar from './components/SearchBar';
import TransactionsList from './components/TransactionsList';

const index = () => {
  return (
    <Box bg="text.500" boxShadow="lg" borderRadius="8px" p="5">
      <Stack spacing="32px">
        <BackButton link="/user/payment" title="Invoice" />
        <SearchBar />
        <TransactionsList />
      </Stack>
    </Box>
  );
};

export default index;
