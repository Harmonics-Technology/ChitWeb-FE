'use client';

import { Box, Flex, Stack } from '@chakra-ui/react';
import React from 'react';

import DownloadPDF from '../Dashboard/components/DownloadPDF';

import Cards from './components/Cards';
import QuickActions from './components/QuickActions';
import RecurringPayments from './components/RecurringPayments';
import ScheduledPaymentsCard from './components/ScheduledPaymentsCard';

const index = () => {
  return (
    <Box>
      <Flex w="100%" alignItems="flex-start" gap="24px">
        <Box w="65%">
          <Stack spacing="30px">
            <Cards />
            <QuickActions />
          </Stack>
        </Box>
        <Box w="35%">
          <Stack spacing="30px">
            <RecurringPayments />
            <ScheduledPaymentsCard />
            <DownloadPDF />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default index;
