'use client';

import { Box, Stack, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

import { BillerItemButton } from '../../Components/BillItemButton';
import InternetSubscriptionModalFlow from '../../Components/InternetSubscriptionModalFlow';
import { BackButton } from '~/lib/components/Button';
import CustomModal from '~/lib/components/Modal';

const Index = () => {
  const billers = [
    {
      name: 'MTN',
      icon: '/assets/images/mtn.png',
    },
    {
      name: 'Airtel',
      icon: '/assets/images/airtel.png',
    },
    {
      name: 'GLO',
      icon: '/assets/images/glo.png',
    },
    {
      name: '9Mobile',
      icon: '/assets/images/9mobile.png',
    },
    {
      name: 'Smile',
      icon: '/assets/images/smile.png',
    },
    {
      name: 'Ntel',
      icon: '/assets/images/ntel.png',
    },
    {
      name: 'Vodafone',
      icon: '/assets/images/vodafone.png',
    },
  ];
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false);
  return (
    <Box borderRadius="8px" boxShadow="lg" py="6" px='3' minH="600px">
      <Stack spacing="64px">
        <BackButton title="Airtime and Data" link="/user/payment/pay-bills" />
        <Box>
          <Box mb="30px">
            <Text fontWeight={500} color="text.400" fontSize={18}>
              Select an electricity distributor
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
        <InternetSubscriptionModalFlow />
      </CustomModal>
    </Box>
  );
};

export default Index;
