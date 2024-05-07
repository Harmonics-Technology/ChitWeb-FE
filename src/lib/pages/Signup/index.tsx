import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import Carousel from '~/lib/components/Carousel';

import SignupForm from './Sections/SignupForm';

const index = () => {
  return (
    <Box w="full" h="100%" my="14">
      <Flex alignItems="center" w="100%" h="100%" justifyContent="center">
        <Box>
          <Flex gap="58px">
            <Carousel
              image="/assets/signup.png"
              title="Seamless Transactions"
              description="Stay in control of your finances; enjoy a hassle-free, secure and efficient way to make and receive payments."
            />
            <SignupForm />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default index;
