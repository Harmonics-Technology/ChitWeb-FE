import { Box, Flex, Button, Text, Stack } from '@chakra-ui/react';
import React from 'react';

import { OptionsIcon } from '~/lib/components/Icons';

const TableItem = () => {
  return (
    <Box
      w="auto"
      px="4"
      bg="actions.700"
      borderRadius="16px"
      h="76px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex alignItems="center" h="100%" gap="30px">
        <Box w="200px" />
        <Box minW="110px" textAlign="left">
          <Text>Debit</Text>
        </Box>
        <Box minW="110px">
          <Text>CT123478898</Text>
        </Box>
        <Box minW="110px">
          <Text>Success</Text>
        </Box>
        <Box minW="110px">
          <Stack w="auto">
            <Text>01 APR 2023</Text>
            <Text>10:50AM</Text>
          </Stack>
        </Box>
        <Box
          bg="brand.100"
          h="100%"
          minW="110px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="brand.900">20,000</Text>
        </Box>
        <Button bg="none">
          <OptionsIcon />
        </Button>
      </Flex>
    </Box>
  );
};

export default TableItem;
