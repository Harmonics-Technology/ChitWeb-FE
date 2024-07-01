import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import ResetPassword from './ResetPassword';
import SideImage from '~/lib/components/SideImage/SideImage';

const index = () => {
  return (
    <Box w="full" h="100%">
      <Box
        w="100%"
        h="100%"
        p='40px'
      >
        <Flex alignItems="center">
          <Box
            w='50%'
          >
            <SideImage />  
          </Box>
          <Box
            w='50%'
          >
            <ResetPassword />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default index;
