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

const SigninForm = () => {
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
              Welcome Back,
            </Heading>
            <Text fontSize={16} color="text.200">
              Please enter your details to continue
            </Text>
          </Stack>
        </Box>

        <Box>
          <FormControl>
            <Stack spacing="24px">
              <Box>
                <FormLabel fontSize={14} color="text.200">
                  Email/Phone Number/Chit ID
                </FormLabel>
                <FormInput
                  type="email"
                  width="100%"
                  value={email}
                  setValue={setEmail}
                  placeholder="Enter your email or phone number or Chit ID"
                />
              </Box>

              <Box>
                <FormLabel fontSize={14} color="text.200">
                  Password
                </FormLabel>
                <InputGroup size="md" mb="16px">
                  <Input
                    pr="4.5rem"
                    w="100%"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={show ? 'text' : 'password'}
                    placeholder="Enter unique password"
                    py="20px"
                    px="16px"
                    fontSize={15}
                    border="1px solid"
                    borderColor="border.100"
                    _placeholder={{ color: 'text.800', fontWeight: 400 }}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleClick}
                      bg="none"
                      _hover={{ bg: 'none' }}
                    >
                      {show ? <FaEye /> : <FaEyeSlash />}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <Box>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Checkbox fontSize={14}>Remember Password</Checkbox>
                    <Link href="/forgot-password">
                      <Text fontSize={14} color="text.400">
                        Forgot Passowrd?
                      </Text>
                    </Link>
                  </Flex>
                </Box>
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
            text="Log in"
          />
          <Text color="text.900" fontSize={14} textAlign="center" mt="20px">
            Don't have an account?{' '}
            <Link href="/signup">
              <Box as="span" color="brand.primary">
                Sign up
              </Box>
            </Link>
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default SigninForm;
