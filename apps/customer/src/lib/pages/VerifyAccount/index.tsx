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
import { BackwardArrowIcon } from '~/lib/components/Icons';
import SideImage from '~/lib/components/SideImage/SideImage';


const OTPVerification = () => {
  const [otp, setOtp] = useState<string>('');
  return (
    <Box w="100%">
      <Stack w='80%' mx='auto'>
        <Link href="/signup">
          <Box mb="48px">
            <Flex alignItems="center" gap="10px">
              <BackwardArrowIcon />
              <Text fontSize={20}>Back</Text>
            </Flex>
          </Box>
        </Link>
        <Box mb="60px">
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
              <PinInputField w="80px" h="80px" fontSize={48} fontWeight={700} />
              <PinInputField w="80px" h="80px" fontSize={48} fontWeight={700} />
              <PinInputField w="80px" h="80px" fontSize={48} fontWeight={700} />
              <PinInputField w="80px" h="80px" fontSize={48} fontWeight={700} />
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
        p='40px'
      >
        <Flex alignItems='flex-start'>
          <Box w='50%'>
            <SideImage />
          </Box>
          <Box w='50%'>
            <OTPVerification />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default index;
