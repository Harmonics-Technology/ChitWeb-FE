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
  Select,
  InputLeftAddon,
  Flex,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { ButtonComponent } from '~/lib/components/Button';
import FormInput from '~/lib/utilities/FormInput';

const SignupForm = () => {
  const [businessName, setBusinessName] = useState<string>('');
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [show, setShow] = React.useState<boolean>(false);
  const handleClick = () => setShow(!show);

  return (
    <Box w="560px" h="auto">
      <Stack spacing="40px">
        <Box>
          <Stack spacing="16px">
            <Heading fontSize={40} fontWeight={600}>
              Create an Account
            </Heading>
            <Text fontSize={18} color="text.200">
              To begin your journey with us, kindly provide us with your
              information{' '}
            </Text>
          </Stack>
        </Box>

        <Box>
          <FormControl>
            <Stack spacing="24px">
              <Box>
                <FormLabel fontSize={16} color="text.200">
                  Business Name
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={businessName}
                  setValue={setBusinessName}
                  placeholder="Enter the name on your official document"
                />
              </Box>
              <Box>
                <FormLabel fontSize={16} color="text.200">
                  Location
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={businessName}
                  setValue={setBusinessName}
                  placeholder="Enter your location e.g Lagos, Nigeria"
                />
              </Box>
              <Box>
                <FormLabel fontSize={16} color="text.200">
                  Email
                </FormLabel>
                <FormInput
                  type="email"
                  width="100%"
                  value={businessName}
                  setValue={setBusinessName}
                  placeholder="Enter your email"
                />
              </Box>
              <Box>
                <FormLabel fontSize={16} color="text.200">
                  Phone Number
                </FormLabel>
                <Box
                  px="3"
                  py="1"
                  border="1px solid"
                  borderColor="border.100"
                  borderRadius="8px"
                >
                  <Flex alignItems="center" gap="10px">
                    <select
                      style={{
                        width: '65px',
                        borderRadius: '0',
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                      }}
                    >
                      <option value="Nig">Nig</option>
                      <option value="Ken">Ken</option>
                      <option value="Gha">Gha</option>
                    </select>
                    <Box w="1px" h="17px" bg="text.800" />
                    <InputGroup size="md" border="none">
                      {/* <Flex alignItems='center'> */}
                      <InputLeftAddon
                        border="none"
                        bg="none"
                        color="text.800"
                        p="0"
                        pr="3"
                      >
                        +234
                      </InputLeftAddon>
                      <input
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        type="tel"
                        placeholder="8127671686"
                        style={{
                          width: '100%',
                          outline: 'none',
                          fontSize: 15,
                          border: 'none',
                          color: '#211F1F',
                          borderRadius: '0px',
                          padding: '0px',
                        }}
                      />
                      {/* </Flex> */}
                    </InputGroup>
                  </Flex>
                </Box>
              </Box>
              <Box>
                <FormLabel fontSize={16} color="text.200">
                  Create Password
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    w="100%"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
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
                <Text fontSize={12} color="text.400" mt="2">
                  Password must contain at least six letters, 1 number, and a
                  character
                </Text>
              </Box>
              <Box>
                <FormLabel fontSize={16} color="text.200">
                  Referral Code (Optional)
                </FormLabel>
                <FormInput
                  type="password"
                  width="100%"
                  value={businessName}
                  setValue={setBusinessName}
                  placeholder="Enter referral code"
                />
                <Text fontSize={14} color="text.900" mt="3" fontWeight={400}>
                  By creating an account, you accept our{' '}
                  <Box as="span" color="brand.primary">
                    Terms & Condition
                  </Box>{' '}
                  and{' '}
                  <Box as="span" color="brand.primary">
                    Privacy Policy
                  </Box>
                </Text>
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
            text="Create Account"
          />
          <Text color="text.900" fontSize={14} textAlign="center" mt="20px">
            Already have an account?{' '}
            <Box as="span" color="brand.primary">
              Log in
            </Box>
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default SignupForm;
