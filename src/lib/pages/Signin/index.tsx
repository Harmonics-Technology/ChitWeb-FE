import { Box, Flex } from '@chakra-ui/react';

import Carousel from '~/lib/components/Carousel';

import SigninForm from './Sections/SigninForm';

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
          <Carousel
            image="/assets/signup.png"
            title="Seamless Transactions"
            description="Stay in control of your finances; enjoy a hassle-free, secure and efficient way to make and receive payments."
          />
          <SigninForm />
        </Flex>
      </Box>
    </Box>
  );
};

export default index;
