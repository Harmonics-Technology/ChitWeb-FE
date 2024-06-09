'use client';

import { Box, Stack, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

import { BillerItemButton } from '../../Components/BillItemButton';
import PayBillsModalFlow from '../../Components/PayBillsModalFlow';
import { BackButton } from '~/lib/components/Button';
import CustomModal from '~/lib/components/Modal';

const Index = () => {
  const billers = [
    {
      name: 'Ikeja Electric',
      icon: '/assets/ikeja.png',
    },
    {
      name: 'Eko Electric',
      icon: '/assets/eko.png',
    },
    {
      name: 'Ibadan Electric',
      icon: '/assets/ibadan.png',
    },
    {
      name: 'Enugu Electric',
      icon: '/assets/enugu.png',
    },
    {
      name: 'Yaba Electric',
      icon: '/assets/yaba.png',
    },
    {
      name: 'Abuja Electric',
      icon: '/assets/abuja.png',
    },
    {
      name: 'Kaduna Electric',
      icon: '/assets/kaduna.png',
    },
    {
      name: 'Ikeja Electric',
      icon: '/assets/ikeja.png',
    },
    {
      name: 'Eko Electric',
      icon: '/assets/eko.png',
    },
    {
      name: 'Ibadan Electric',
      icon: '/assets/ibadan.png',
    },
    {
      name: 'Enugu Electric',
      icon: '/assets/enugu.png',
    },
    {
      name: 'Yaba Electric',
      icon: '/assets/yaba.png',
    },
  ];
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false);
  return (
    <Box borderRadius="8px" boxShadow="lg" p="6" minH="600px">
      <Stack spacing="64px">
        <BackButton title="Electricity" link="/user/payment/pay-bills" />
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
        <PayBillsModalFlow />
      </CustomModal>
    </Box>
  );
};

export default Index;
