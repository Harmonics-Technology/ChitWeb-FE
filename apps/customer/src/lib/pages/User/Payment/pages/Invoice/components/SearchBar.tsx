import {
  Box,
  Flex,
  InputGroup,
  Input,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import { ButtonComponent } from '~/lib/components/Button';
import { SearchIcon } from '~/lib/components/Icons';
import CustomModal from '~/lib/components/Modal';
import type { OpenModalProps } from '~/lib/utilities/schema';
import { SideNavProps } from '~/lib/utilities/schema';

import CreateInvoiceFlow from './CreateInvoiceFlow';

const TransactionsDateFilter = () => {
  return (
    <Box
      minW="700px"
      px="18px"
      py="12px"
      borderRadius="12px"
      border="2px solid"
      borderColor="brand.300"
    >
      <InputGroup w="70%">
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
      fontWeight={400}
      borderRadius="6px"
      onClick={openModal}
      fontSize={17}
      bg="bg.200"
    >
      <FaPlus />
    </Button>
  );
};

const SearchBar = () => {
  const [openCreateInvoiceModal, setOpenCreateInvoiceModal] =
    useState<boolean>(false);
  return (
    <Box>
      <Flex alignItems="center" gap="100px">
        <TransactionsDateFilter />
        <SchedulePaymentButton
          openModal={() => setOpenCreateInvoiceModal(true)}
        />
      </Flex>
      <CustomModal
        isOpen={openCreateInvoiceModal}
        onClose={() => setOpenCreateInvoiceModal(false)}
      >
        <CreateInvoiceFlow />
      </CustomModal>
    </Box>
  );
};

export default SearchBar;
