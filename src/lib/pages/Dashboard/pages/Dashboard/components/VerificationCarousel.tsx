import { Box, Flex, Image, Text, Heading, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const VerificationSlide = () => {
  return (
    <Box>
      <Flex gap="30px" alignItems="center">
        <Box
          w="357px"
          h="192px"
          borderRadius="8px"
          bgGradient="linear(to-br, bg.100 20%, bg.200 80%)"
          p="3"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Flex alignItems="center" justifyContent="space-between">
            <Text color="text.500" fontSize={12} lineHeight="25px">
              To ensure the security and integrity of your account, follow these
              simple steps to get started; Enjoy seamless and secure
              transactions with CHIT.
            </Text>
            <Image src="/assets/verify-number.png" />
          </Flex>
        </Box>
        <Box>
          <VStack spacing="16px">
            <Heading fontSize={18}>Verify Mobile Number</Heading>
            <Text fontSize={14}>Verify your mobile number to get started</Text>
            <Link href="/">
              <Text
                color="brand.primary"
                textDecoration="underline"
                fontWeight={600}
              >
                Verify Number
              </Text>
            </Link>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

const VerificationCarousel = () => {
  return (
    <Box
      w="100%"
      borderRadius="8px"
      border="1px solid"
      borderColor="brand.300"
      boxShadow="4px 4px 0px 0px rgba(96, 63, 239, 1)"
      p="5"
    >
      <VerificationSlide />
    </Box>
  );
};

export default VerificationCarousel;
