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

import RecurringPaymentFlow from './RecurringPaymentFlow';
import ScheduledPaymentFlow from './ScheduledPaymentFlow';

const TransactionsStatusFilter = ({
  navPosition,
  setNavPosition,
}: SideNavProps) => {
  return (
    <Box
      px="14px"
      py='8px'
      w="50%"
      borderRadius="12px"
      border="2px solid"
      borderColor="brand.300"
    >
      <Flex alignItems="center" gap="20px">
        <ButtonComponent
          text="Regular"
          bg={navPosition === 0 ? 'bg.500' : 'none'}
          color={navPosition === 0 ? 'brand.primary' : 'text.200'}
          width="85px"
          onClick={() => setNavPosition(0)}
        />
        <ButtonComponent
          text="Scheduled"
          bg={navPosition === 1 ? 'bg.500' : 'none'}
          color={navPosition === 1 ? 'brand.primary' : 'text.200'}
          width="105px"
          onClick={() => setNavPosition(1)}
        />
        <ButtonComponent
          text="Recurring"
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
      w="50%"
      px="18px"
      py='12px'
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
      boxShadow="md"
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
      <Flex alignItems="center" gap="25px">
        <TransactionsDateFilter />
        <TransactionsStatusFilter
          navPosition={navPosition}
          setNavPosition={setNavPosition}
        />
        {/* {navPosition !== 0 && (
          <SchedulePaymentButton
            openModal={() => setOpenScheduledPaymentsModal(true)}
          />
        )} */}
      </Flex>
      <CustomModal
        isOpen={openScheduledPayemtsModal}
        onClose={() => setOpenScheduledPaymentsModal(false)}
      >
        {navPosition === 1 && <ScheduledPaymentFlow />}
        {navPosition === 2 && <RecurringPaymentFlow />}
      </CustomModal>
    </Box>
  );
};

export default SearchBar;
