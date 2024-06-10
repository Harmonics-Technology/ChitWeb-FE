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
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import React, { useState } from 'react';
import { useForm, Resolver } from "react-hook-form"
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IdentityService, LoginRequestValidator, type LoginRequest } from 'shared-services';
import { PrimaryInput } from 'shared-ui';

// import { ButtonComponent } from '~/lib/components/Button';
// import FormInput from '~/lib/utilities/FormInput';
// import PrimaryInput from '~/lib/utilities/FormInput/PrimaryInput';
// import { LoginRequestValidator } from '~/lib/utilities/FormValidationClasses/LoginRequestValidator';
// import { IdentityService, type LoginRequest } from '~/services';



const resolver = classValidatorResolver(LoginRequestValidator);

const SigninForm = () => {
  const cookies = useCookies();
  const router = useRouter();
  const [show, setShow] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const togglePasswordVisibility = () => setShow(!show);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isLoading },
  } = useForm<LoginRequest>({ resolver });

  const onSubmit = async (data: LoginRequest) => {
    setLoading(true);
    try {

      const response = await IdentityService.postIdentityApiIdentityLogin({requestBody: data});
      // check if the api retunrs a 401
      toast.success(`Welcome back`);
      cookies.set('token', response.accessToken as string);
      setLoading(false);
      router.push('/user/dashboard');
    } catch (error) {
      setLoading(false);
      toast.error('Invalid email or password');
    }
  }

  const handleErrors = async (error: any) => {
  }


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

        <form onSubmit={handleSubmit(onSubmit, handleErrors)}>

          <Box>
            <FormControl>
              <Stack spacing="24px">
                <Box>
                  <PrimaryInput<LoginRequest>
                    register={register}
                    name="email"
                    error={errors.email}
                    defaultValue=''
                    type="email"
                    placeholder="Enter your email or phone number or Chit ID"
                    label="Email/Phone Number/Chit ID"
                  />
                </Box>

                <Box>
                  <PrimaryInput<LoginRequest>
                    register={register}
                    name="password"
                    error={errors.password}
                    defaultValue=''
                    placeholder="Enter unique password"
                    type={show ? 'text' : 'password'}
                    icon
                    passwordVisible={show}
                    changeVisibility={togglePasswordVisibility}
                    label="Password"
                  />
                  <Box mt={4}>
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
            <Button
              bg={isValid ? 'bg.400' : 'bg.300'}
              color='text.500'
              py="23px"
              px="18px"
              borderRadius="12px"
              fontWeight="normal"
              width="100%"
              type='submit'
              isLoading={loading}
            // border={`1px solid`}
            // borderColor={color}
            >
              Log in
            </Button>
            <Text color="text.900" fontSize={14} textAlign="center" mt="20px">
              Don't have an account?{' '}
              <Link href="/signup">
                <Box as="span" color="brand.primary">
                  Sign up
                </Box>
              </Link>
            </Text>
          </Box>
        </form>
      </Stack>
    </Box>
  );
};

export default SigninForm;
