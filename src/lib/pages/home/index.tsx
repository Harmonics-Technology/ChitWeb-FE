'use client';

import { Flex, Text } from '@chakra-ui/react';

import CTASection from '~/lib/components/samples/CTASection';
import SomeImage from '~/lib/components/samples/SomeImage';
import SomeText from '~/lib/components/samples/SomeText';
import EncryptionService from '~/lib/utilities/encryptions';
import { IdentityService, LoginRequest, WalletService } from '~/services';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      // minHeight="100vh"
      // gap={4}
      // mb={8}
      w="full"
      // background="brand.primary"
    >
      <Text color="white" fontSize="6xl">
        CHIT - Revolutionizing Payments
      </Text>
    </Flex>
  );
};

export default Home;
