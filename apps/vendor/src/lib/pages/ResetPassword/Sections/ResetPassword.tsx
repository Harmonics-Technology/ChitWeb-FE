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

const ResetPassword = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [show, setShow] = React.useState<boolean>(false);
  const handleClick = () => setShow(!show);

  return (
    <Box w="500px" h="auto">
      <Stack spacing="40px">
        <Box>
          <Stack spacing="16px">
            <Heading fontSize={40} fontWeight={600}>
              Reset Password
            </Heading>
          </Stack>
        </Box>

        <Box>
          <FormControl>
            <Stack spacing="24px">
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

                <Text mt="2" fontSize={12} color="text.400">
                  Password must contain at least six letters, 1 number, and a
                  character
                </Text>
              </Box>
              <Box>
                <FormLabel fontSize={14} color="text.200">
                  Confirm Password
                </FormLabel>
                <InputGroup size="md" mb="16px">
                  <Input
                    pr="4.5rem"
                    w="100%"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type={show ? 'text' : 'password'}
                    placeholder="Confirm password"
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
          <Link href="/signin">
            <Text
              fontSize={14}
              textAlign="center"
              mt="20px"
              color="brand.primary"
            >
              Back to Login
            </Text>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default ResetPassword;
