'use client';

import { Box, Heading, Stack, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { ActionButton, QuickActionButton } from '~/lib/components/Button';
import {
  AddFundsIcon,
  GenerateChitIcon,
  ClaimChitIcon,
  TransferFundsIcon,
  WithdrawIcon,
  InvoiceIcon,
  RequestFundsIcon,
  PayVendorIcon,
  PayBillsIcon,
  MyCardIcon,
  ConvertIcon,
  CryptoIcon,
  ProductIcon,
  ScheduledPaymentsIcon,
} from '~/lib/components/Icons';

const QuickActions = () => {
  const router = useRouter();
  return (
    <Box bg="brand.100" borderRadius="40px" px="30px" py="30px">
      <Stack spacing="32px">
        <Box>
          <Heading fontSize={20} fontWeight={700}>
            Quick actions
          </Heading>
        </Box>
        <Box>
          <Flex
            alignItems="center"
            gap='20px'
            flexWrap="wrap"
            justifyContent='center'
          >
            <QuickActionButton
              title="Add Funds"
              bgColor="actions.100"
              icon={AddFundsIcon}
              onClick={() => router.push('/user/payment/add-funds')}
            />
            <QuickActionButton
              title="Generate CHIT"
              bgColor="actions.200"
              icon={GenerateChitIcon}
              onClick={() => {}}
            />
            <QuickActionButton
              title="Claim CHIT"
              bgColor="actions.300"
              icon={ClaimChitIcon}
              onClick={() => {}}
            />
            <QuickActionButton
              title="Transfer Funds"
              bgColor="actions.400"
              icon={TransferFundsIcon}
              onClick={() => {}}
            />
            <QuickActionButton
              title="Withdraw"
              bgColor="actions.500"
              icon={WithdrawIcon}
              onClick={() => {}}
            />
            {/* <QuickActionButton
              title="Invoice"
              bgColor="actions.600"
              icon={InvoiceIcon}
              onClick={() => router.push('/user/payment/invoice')}
            /> */}
            <QuickActionButton
              title="Request Funds"
              bgColor="#FFF2E5"
              icon={RequestFundsIcon}
              onClick={() => router.push('/user/payment/requests')}
            />
            <QuickActionButton
              title="Pay Vendor"
              bgColor="#E5FCFF"
              icon={PayVendorIcon}
              onClick={() => router.push('/user/payment/pay-vendor')}
            />
            <QuickActionButton
              title="Pay Bills"
              bgColor="#EAFBF3"
              icon={PayBillsIcon}
              onClick={() => router.push('/user/payment/pay-bills')}
            />
            {/* <QuickActionButton
              title="My Cards"
              bgColor="#E5FCFF"
              icon={MyCardIcon}
              onClick={() => {}}
            /> */}
            <QuickActionButton
              title="Convert"
              bgColor="rgba(0, 86, 210, 0.1)"
              icon={ConvertIcon}
              onClick={() => {}}
            />
            <QuickActionButton
              title="Crypto"
              bgColor="#FFF6E5"
              icon={CryptoIcon}
              onClick={() => {}}
            />
            {/* <QuickActionButton
              title="Product/Services"
              bgColor="#E5FCFF"
              icon={ProductIcon}
              onClick={() => router.push('/user/payment/products')}
            /> */}
            <QuickActionButton
              title="Scheduled Payments"
              bgColor="#FFF6E5"
              icon={ScheduledPaymentsIcon}
              onClick={() => {}}
            />
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default QuickActions;
