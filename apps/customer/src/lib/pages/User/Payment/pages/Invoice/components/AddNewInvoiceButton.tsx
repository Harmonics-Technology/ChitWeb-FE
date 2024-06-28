import { Button } from '@chakra-ui/react';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddNewInvoiceButton = () => {
  return (
    <Button
      color="text.500"
      mb="30px"
      float="right"
      boxShadow="lg"
      bg="bg.200"
      borderRadius="6px"
    >
      <FaPlus />
    </Button>
  );
};

export default AddNewInvoiceButton;
