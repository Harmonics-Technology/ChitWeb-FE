import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

import type { StepProps } from '~/lib/utilities/schema';

const index = ({ step }: StepProps) => {
  return (
    <Box>
      <Flex justifyContent="center" alignItems="center">
        <Box
          border="1px solid"
          borderColor="border.100"
          w="35px"
          h="35px"
          borderRadius="50%"
          bg={step > 0 ? 'brand.primary' : 'none'}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color={step > 0 ? 'text.500' : 'brand.300'}>1</Text>
        </Box>
        <Box w="40px" h="2px" bg="border.100" />
        <Box
          w="35px"
          border="1px solid"
          borderColor="border.100"
          h="35px"
          borderRadius="50%"
          bg={step > 1 ? 'brand.primary' : 'none'}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color={step > 1 ? 'text.500' : 'brand.300'}>2</Text>
        </Box>
        <Box w="40px" h="2px" bg="border.100" />
        <Box
          w="35px"
          border="1px solid"
          borderColor="border.100"
          h="35px"
          borderRadius="50%"
          bg={step > 2 ? 'brand.primary' : 'none'}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color={step > 2 ? 'text.500' : 'brand.300'}>3</Text>
        </Box>
        <Box w="40px" h="2px" bg="border.100" />
        <Box
          w="35px"
          border="1px solid"
          borderColor="border.100"
          h="35px"
          borderRadius="50%"
          bg={step === 4 ? 'brand.primary' : 'none'}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color={step === 4 ? 'text.500' : 'brand.300'}>4</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default index;
