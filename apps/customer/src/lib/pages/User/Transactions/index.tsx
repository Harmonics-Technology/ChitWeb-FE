'use client';

import { Box, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import RecurringTransactionsList from './components/RecurringTransactionsList';
import ScheduledTransactionsList from './components/ScheduledTransactionsList';
import SearchBar, { SchedulePaymentButton } from './components/SearchBar';
import TransactionsList from './components/TransactionsList';
import CustomModal from '~/lib/components/Modal';
import ScheduledPaymentFlow from './components/ScheduledPaymentFlow';
import RecurringPaymentFlow from './components/RecurringPaymentFlow';



const Index = () => {
  const [navPosition, setNavPosition] = useState<number>(0);
  const [openScheduledPayemtsModal, setOpenScheduledPaymentsModal] =
    useState<boolean>(false);
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
      <Stack spacing="32px" position='relative'>
        <SearchBar navPosition={navPosition} setNavPosition={setNavPosition} />
        <Box>
          {navPosition === 0 && <TransactionsList />}
          {navPosition === 1 && <ScheduledTransactionsList />}
          {navPosition === 2 && <RecurringTransactionsList />}
        </Box>
        <Box position='absolute' right='20px' bottom='120px'>
          {navPosition === 1 && (
            <SchedulePaymentButton
              openModal={() => setOpenScheduledPaymentsModal(true)}
            />
          )}
        </Box>
      </Stack>
      <CustomModal
        isOpen={openScheduledPayemtsModal}
        onClose={() => setOpenScheduledPaymentsModal(false)}
      >
        <ScheduledPaymentFlow />
      </CustomModal>
    </Box>
  );
};

export default Index;
