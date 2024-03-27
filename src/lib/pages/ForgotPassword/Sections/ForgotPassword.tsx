'use client';

import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Stack,
  InputGroup,
  InputRightElement,
  Button,
  Input,
  Checkbox,
  Flex,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { ButtonComponent } from '~/lib/components/Button';
import FormInput from '~/lib/utilities/FormInput';

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [show, setShow] = React.useState<boolean>(false);
  const handleClick = () => setShow(!show);
  return (
    <Box w="500px" h="auto">
      <Stack spacing="40px">
        <Box>
          <Stack spacing="16px">
            <Heading fontSize={40} fontWeight={600}>
              Forgot Password?
            </Heading>
            <Text fontSize={16} color="text.200">
              Don't worry, we'll send some instructions
            </Text>
          </Stack>
        </Box>

        <Box>
          <FormControl>
            <Stack spacing="24px">
              <Box>
                <FormLabel fontSize={14} color="text.200">
                  Email
                </FormLabel>
                <FormInput
                  type="email"
                  width="100%"
                  value={email}
                  setValue={setEmail}
                  placeholder="Enter your email"
                />
              </Box>
            </Stack>
          </FormControl>
        </Box>

        <Box>
          <ButtonComponent
            width="100%"
            bg={isValidated ? 'bg.400' : 'bg.300'}
            color="text.500"
            onClick={() => {}}
            text="Reset Password"
          />
          <Link href="/signin">
            <Text
              color="brand.primary"
              fontSize={14}
              textAlign="center"
              mt="20px"
            >
              Back to Login
            </Text>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default ForgotPassword;
