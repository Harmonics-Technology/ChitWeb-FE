'use client';

import { Box, Heading, Stack, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, {useState} from 'react';

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
import CustomModal from '~/lib/components/Modal';
import QuickActionModals from './QuickActionModals';




const QuickActions = () => {


  const router = useRouter();
  const [openGenerateChitModal, setOpenGenerateChitModal] = useState<boolean>(false);
  const [openClaimChitModal, setOpenClaimChitModal] = useState<boolean>(false);
  const [openTransferFundsModal, setOpenTransferFundsModal] = useState<boolean>(false);
  const [openWithdrawModal, setOpenWithdrawModal] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);

  const handleOpenModal = (index: number) => {
    setIndex(index);
    if(index === 1){
      setOpenGenerateChitModal(true);
    }else if (index === 2) {
      setOpenClaimChitModal(true);
    }else if (index === 3) {
      setOpenTransferFundsModal(true);
    } else if (index === 4) {
      setOpenWithdrawModal(true);
    }
  }

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
              onClick={() => handleOpenModal(1)}
            />
            <QuickActionButton
              title="Claim CHIT"
              bgColor="actions.300"
              icon={ClaimChitIcon}
              onClick={() => handleOpenModal(2)}
            />
            <QuickActionButton
              title="Transfer Funds"
              bgColor="actions.400"
              icon={TransferFundsIcon}
              onClick={() => handleOpenModal(3)}
            />
            <QuickActionButton
              title="Withdraw"
              bgColor="actions.500"
              icon={WithdrawIcon}
              onClick={() => handleOpenModal(4)}
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
      <CustomModal
        isOpen= {
          index === 1 ? openGenerateChitModal : index === 2 ? openClaimChitModal : index === 3 ? openTransferFundsModal : openWithdrawModal
        }
        onClose={
          index === 1 ? () => setOpenGenerateChitModal(false) : index === 2 ? () => setOpenClaimChitModal(false) : index === 3 ? () => setOpenTransferFundsModal(false) : () => setOpenWithdrawModal(false)
        }
      >
        <QuickActionModals index={index} />
      </CustomModal>
    </Box>
  );
};

export default QuickActions;
