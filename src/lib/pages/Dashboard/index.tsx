'use client';

import { Box, Flex, Stack } from '@chakra-ui/react';

import DownloadPDF from './components/DownloadPDF';
import Invoice from './components/Invoice';
import QuickActions from './components/QuickActions';
import ScheduledPayments from './components/ScheduledPayments';
import Transactions from './components/Transactions';
import VerificationCarousel from './components/VerificationCarousel';
import Wallets from './components/Wallets';

const index = () => {
  return (
    <Box>
      <Flex w="100%" alignItems="flex-start" gap="24px">
        <Box w="65%">
          <Stack spacing="30px">
            <VerificationCarousel />
            <Wallets />
            <Invoice />
            <Transactions />
          </Stack>
        </Box>
        <Box w="35%">
          <Stack spacing="30px">
            <QuickActions />
            <ScheduledPayments />
            <DownloadPDF />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default index;
