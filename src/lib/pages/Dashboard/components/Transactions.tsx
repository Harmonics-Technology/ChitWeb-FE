import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { ButtonComponent } from '~/lib/components/Button';

const Transactions = () => {
  return (
    <Box
      w="100%"
      borderRadius="8px"
      p="5"
      bg="text.500"
      boxShadow="lg"
      minH="300px"
    >
      <Box mb="14">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading fontSize={18} fontWeight={600} color="text.200">
            Latest Transactions
          </Heading>
          <Box>
            <Flex alignItems="center" gap="12px">
              <ButtonComponent
                text="Today"
                bg="brand.primary"
                color="text.500"
                width="100px"
                onClick={() => {}}
              />
              <ButtonComponent
                text="Last 7 Days"
                bg="text.800"
                color="text.200"
                width="110px"
                onClick={() => {}}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box textAlign="center">
        <Text color="text.800" fontSize={16}>
          No Transaction yet
        </Text>
      </Box>
    </Box>
  );
};

export default Transactions;
