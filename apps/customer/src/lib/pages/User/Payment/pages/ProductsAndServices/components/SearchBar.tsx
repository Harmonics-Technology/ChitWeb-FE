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

import AddProductFlowModal from './AddProductFlowModal';

const TransactionsDateFilter = () => {
  return (
    <InputGroup maxW="630px" h="60px">
      <InputLeftElement pointerEvents="none" ml="3" mt="2">
        <SearchIcon />
      </InputLeftElement>
      <Input
        type="text"
        h="100%"
        pl="50px"
        outline="none"
        borderRadius="12px"
        placeholder="Search"
        border="2px solid"
        borderColor="brand.300"
        color="brand.primary"
      />
    </InputGroup>
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
      fontSize={20}
      bg="bg.200"
    >
      <FaPlus />
    </Button>
  );
};

const SearchBar = () => {
  const [openAddProductModal, setOpenAddProductModal] =
    useState<boolean>(false);
  return (
    <Box>
      <Flex alignItems="center" gap="200px">
        <TransactionsDateFilter />
        <SchedulePaymentButton openModal={() => setOpenAddProductModal(true)} />
      </Flex>
      <CustomModal
        isOpen={openAddProductModal}
        onClose={() => setOpenAddProductModal(false)}
      >
        <AddProductFlowModal closeModal={() => setOpenAddProductModal(false)} />
      </CustomModal>
    </Box>
  );
};

export default SearchBar;
