'use client';

import { Box, Stack } from '@chakra-ui/react';
import React from 'react';

import { BackButton } from '~/lib/components/Button';

import ProductsList from './components/ProductsList';
import SearchBar from './components/SearchBar';

const index = () => {
  return (
    <Box p="5" boxShadow="lg" borderRadius="8px">
      <Stack spacing="40px">
        <BackButton link="/user/payment" title="Products/Services" />
        <SearchBar />
        <ProductsList />
      </Stack>
    </Box>
  );
};

export default index;
