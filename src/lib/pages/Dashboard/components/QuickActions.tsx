'use client';

import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { createContext, useState, useMemo } from 'react';

import { ActionButton } from '~/lib/components/Button';
import {
  InvoiceIcon,
  GenerateChitIcon,
  ClaimChitIcon,
  AddFundsIcon,
  TransferFundsIcon,
  WithdrawIcon,
} from '~/lib/components/Icons';

import QuickActionsModalFlow from './QuickActionsModalFlow';

export const QuickActionsContext = createContext<any>(null);

const QuickActions = () => {
  const [position, setPosition] = useState<number>(0);
  const [openTransferModal, setOpenTransferModal] = useState<boolean>(false);
  const [openWithdrawModal, setOpenWithdrawModal] = useState<boolean>(false);
  const [openGenerateChitModal, setOpenGenerateChitModal] =
    useState<boolean>(false);
  const [openClaimChitModal, setOpenClaimChitModal] = useState<boolean>(false);

  const contextValue = useMemo(
    () => ({
      openTransferModal,
      setOpenTransferModal,
      openWithdrawModal,
      setOpenWithdrawModal,
      openGenerateChitModal,
      setOpenGenerateChitModal,
      openClaimChitModal,
      setOpenClaimChitModal,
    }),
    [
      openTransferModal,
      setOpenTransferModal,
      openWithdrawModal,
      setOpenWithdrawModal,
      openGenerateChitModal,
      setOpenGenerateChitModal,
      openClaimChitModal,
      setOpenClaimChitModal,
    ]
  );

  const showTransferModal = () => {
    setPosition(1);
    setOpenTransferModal(true);
  };

  const showWithdrawModal = () => {
    setPosition(2);
    setOpenWithdrawModal(true);
  };

  const showGenerateChitModal = () => {
    setPosition(3);
    setOpenGenerateChitModal(true);
  };

  const showClaimChitModal = () => {
    setPosition(4);
    setOpenClaimChitModal(true);
  };

  return (
    <QuickActionsContext.Provider value={contextValue}>
      <Box
        w="100%"
        borderRadius="8px"
        p="3"
        bg="text.500"
        boxShadow="lg"
        minH="320px"
      >
        <Box mb="16px">
          <Heading fontSize={18} fontWeight={600} color="text.200" mb="4">
            Quick Actions
          </Heading>
          <Box w="100%" mx="auto" h="1px" bg="border.100" />
        </Box>

        <Box textAlign="center">
          <Flex
            alignItems="center"
            flexWrap="wrap"
            justifyContent="center"
            gap="16px"
          >
            <ActionButton
              title="Add Funds"
              bgColor="actions.100"
              icon={AddFundsIcon}
              onClick={() => {}}
            />
            <ActionButton
              title="Generate CHIT"
              bgColor="actions.200"
              icon={GenerateChitIcon}
              onClick={showGenerateChitModal}
            />
            <ActionButton
              title="Claim CHIT"
              bgColor="actions.300"
              icon={ClaimChitIcon}
              onClick={showClaimChitModal}
            />
            <ActionButton
              title="Transfer Funds"
              bgColor="actions.400"
              icon={TransferFundsIcon}
              onClick={showTransferModal}
            />
            <ActionButton
              title="Withdraw"
              bgColor="actions.500"
              icon={WithdrawIcon}
              onClick={showWithdrawModal}
            />
            <ActionButton
              title="Invoice"
              bgColor="actions.600"
              icon={InvoiceIcon}
              onClick={() => {}}
            />
          </Flex>
        </Box>
      </Box>
      <QuickActionsModalFlow position={position} setPosition={setPosition} />
    </QuickActionsContext.Provider>
  );
};

export default QuickActions;
