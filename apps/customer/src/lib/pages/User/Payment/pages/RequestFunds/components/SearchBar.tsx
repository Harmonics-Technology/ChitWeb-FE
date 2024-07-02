import {
  Box,
  Flex,
  InputGroup,
  Input,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { ButtonComponent } from '~/lib/components/Button';
import { SearchIcon } from '~/lib/components/Icons';
import CustomModal from '~/lib/components/Modal';
import type { SideNavProps, OpenModalProps } from '~/lib/utilities/schema';

import RequestFundsModalFlow from './RequestFundsModalFlow';

const TransactionsStatusFilter = ({
  navPosition,
  setNavPosition,
}: SideNavProps) => {
  return (
    <Box
      p="8px"
      w="45%"
      borderRadius="12px"
      border="2px solid"
      borderColor="brand.300"
    >
      <Flex alignItems="center" gap="20px">
        <ButtonComponent
          text="All"
          bg={navPosition === 0 ? 'bg.500' : 'none'}
          color={navPosition === 0 ? 'brand.primary' : 'text.200'}
          width="85px"
          onClick={() => setNavPosition(0)}
        />
        <ButtonComponent
          text="Received"
          bg={navPosition === 1 ? 'bg.500' : 'none'}
          color={navPosition === 1 ? 'brand.primary' : 'text.200'}
          width="105px"
          onClick={() => setNavPosition(1)}
        />
        <ButtonComponent
          text="Sent"
          bg={navPosition === 2 ? 'bg.500' : 'none'}
          color={navPosition === 2 ? 'brand.primary' : 'text.200'}
          width="105px"
          onClick={() => setNavPosition(2)}
        />
      </Flex>
    </Box>
  );
};

const TransactionsDateFilter = () => {
  return (
    <Box
      w="45%"
      p="12px"
      borderRadius="12px"
      border="2px solid"
      borderColor="brand.300"
    >
      <InputGroup w="300px">
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search"
          border="none"
          outline="none"
          color="brand.primary"
        />
      </InputGroup>
    </Box>
  );
};

const SchedulePaymentButton = ({ openModal }: OpenModalProps) => {
  return (
    <Button
      boxShadow="xl"
      color="text.500"
      fontWeight={500}
      borderRadius="6px"
      onClick={openModal}
      fontSize={25}
      bg="bg.200"
    >
      +
    </Button>
  );
};

const SearchBar = ({ navPosition, setNavPosition }: SideNavProps) => {
  const [openScheduledPayemtsModal, setOpenScheduledPaymentsModal] =
    useState<boolean>(false);
  return (
    <Box>
      <Flex alignItems="center" gap="20px">
        <TransactionsDateFilter />
        <TransactionsStatusFilter
          navPosition={navPosition}
          setNavPosition={setNavPosition}
        />
        <SchedulePaymentButton
          openModal={() => setOpenScheduledPaymentsModal(true)}
        />
      </Flex>
      <CustomModal
        isOpen={openScheduledPayemtsModal}
        onClose={() => setOpenScheduledPaymentsModal(false)}
      >
        <RequestFundsModalFlow />
      </CustomModal>
    </Box>
  );
};

export default SearchBar;
