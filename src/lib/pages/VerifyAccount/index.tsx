'use client';

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  PinInputField,
  PinInput,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';

import Carousel from '~/lib/components/Carousel';
import { CloseIcon } from '~/lib/components/Icons';

const OTPVerification = () => {
  const [otp, setOtp] = useState<string>('');
  return (
    <Box maxW="456px">
      <Stack>
        <Link href="/signup">
          <Box mb="48px">
            <Flex alignItems="center" gap="10px">
              <CloseIcon />
              <Text fontSize={20}>Back</Text>
            </Flex>
          </Box>
        </Link>
        <Box mb="80px">
          <Heading mb="16px" fontSize={40} fontWeight={600} color="text.200">
            Verify Account
          </Heading>
          <Text>Enter the OTP code sent to mu*******him@gmail.com</Text>
        </Box>
        <Box>
          <Flex gap="30px" alignItems="center" mb="38px">
            <PinInput
              otp
              mask
              placeholder="*"
              value={otp}
              onChange={(value) => setOtp(value)}
            >
              <PinInputField w="84px" h="84px" fontSize={48} fontWeight={700} />
              <PinInputField w="84px" h="84px" fontSize={48} fontWeight={700} />
              <PinInputField w="84px" h="84px" fontSize={48} fontWeight={700} />
              <PinInputField w="84px" h="84px" fontSize={48} fontWeight={700} />
            </PinInput>
          </Flex>
          <Text color="text.400">
            Didn't receive the code?{' '}
            <Box as="span" color="brand.primary">
              Resend it
            </Box>
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

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
        <Flex alignItems="flex-start" gap="100px" my="14">
          <Carousel />
          <OTPVerification />
        </Flex>
      </Box>
    </Box>
  );
};

export default index;
