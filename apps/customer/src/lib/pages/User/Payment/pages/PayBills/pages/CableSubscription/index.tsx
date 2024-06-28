'use client';

import { Box, Stack, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

import { BillerItemButton } from '../../Components/BillItemButton';
import CableSubscriptionModalFlow from '../../Components/CableSubscriptionModalFlow';
import { BackButton } from '~/lib/components/Button';
import CustomModal from '~/lib/components/Modal';

const Index = () => {
  const billers = [
    {
      name: 'DSTV',
      icon: '/assets/dstv.png',
    },
    {
      name: 'Startimes',
      icon: '/assets/startimes.png',
    },
    {
      name: 'GoTV',
      icon: '/assets/gotv.png',
    },
    {
      name: 'IrokoTV',
      icon: '/assets/iroko.png',
    },
    {
      name: 'RokuTV',
      icon: '/assets/roku.png',
    },
    {
      name: 'IbakaTV',
      icon: '/assets/ibaka.png',
    },
  ];
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false);
  return (
    <Box borderRadius="8px" boxShadow="lg" p="6" minH="600px">
      <Stack spacing="64px">
        <BackButton
          title="TV and Cable Subscription"
          link="/user/payment/pay-bills"
        />
        <Box>
          <Box mb="30px">
            <Text fontWeight={500} color="text.400" fontSize={18}>
              Select an Operator
            </Text>
          </Box>
          <Flex alignItems="center" gap="24px" flexWrap="wrap" rowGap="30px">
            {billers.map((bill, index) => (
              <BillerItemButton
                key={index}
                label={bill.name}
                image={bill.icon}
                onClick={() => setOpenPaymentModal(true)}
              />
            ))}
          </Flex>
        </Box>
      </Stack>
      <CustomModal
        isOpen={openPaymentModal}
        onClose={() => setOpenPaymentModal(false)}
      >
        <CableSubscriptionModalFlow />
      </CustomModal>
    </Box>
  );
};

export default Index;
