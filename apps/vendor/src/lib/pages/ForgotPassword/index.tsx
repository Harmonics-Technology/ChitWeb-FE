import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import Carousel from '~/lib/components/Carousel';

import ForgotPassword from './Sections/ForgotPassword';

const index = () => {
  return (
    <Box w="full" h="100%">
      <Box
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex alignItems="center" gap="58px" my="14">
          <Carousel />
          <ForgotPassword />
        </Flex>
      </Box>
    </Box>
  );
};

export default index;
