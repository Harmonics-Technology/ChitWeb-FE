'use client';

import {
  Box,
  Stack,
  Heading,
  Text,
  Flex,
  PinInputField,
  PinInput,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { ButtonComponent } from '~/lib/components/Button';
import FormInput from '~/lib/utilities/FormInput';
import type { StepProps, CloseModalProps } from '~/lib/utilities/schema';

const VerificationForm = ({ step, setStep }: StepProps) => {
  const [mobileNumber, setMobileNumber] = useState<string>('');
  return (
    <Box>
      <Stack spacing="25px">
        <Box textAlign="center">
          <Heading mb="12px" color="text.200" fontWeight={700} fontSize={32}>
            Verify Mobile Number
          </Heading>
          <Text color="text.100">
            Enter your mobile phone number to get started
          </Text>
        </Box>
        <FormInput
          type="tel"
          value={mobileNumber}
          setValue={setMobileNumber}
          width="100%"
          placeholder="Enter your mobile phone number"
        />
        <ButtonComponent
          width="100%"
          color="text.500"
          text="Proceed"
          onClick={() => setStep(step + 1)}
          bg="bg.200"
        />
      </Stack>
    </Box>
  );
};

const OTPVerificationForm = ({ step, setStep }: StepProps) => {
  const [otp, setOtp] = useState<string>('');
  return (
    <Box>
      <Stack spacing="40px">
        <Box textAlign="center">
          <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
            Verify Mobile Number
          </Heading>
          <Text>Enter the OTP code sent to your mobile phone number</Text>
        </Box>
        <Box>
          <VStack>
            <Flex gap="30px" alignItems="center" mb="30px">
              <PinInput
                otp
                mask
                placeholder="*"
                value={otp}
                onChange={(value) => setOtp(value)}
              >
                <PinInputField
                  w="65px"
                  h="65px"
                  fontSize={25}
                  fontWeight={700}
                />
                <PinInputField
                  w="65px"
                  h="65px"
                  fontSize={25}
                  fontWeight={700}
                />
                <PinInputField
                  w="65px"
                  h="65px"
                  fontSize={25}
                  fontWeight={700}
                />
                <PinInputField
                  w="65px"
                  h="65px"
                  fontSize={25}
                  fontWeight={700}
                />
              </PinInput>
            </Flex>
            <ButtonComponent
              width="100%"
              color="text.500"
              text="Proceed"
              onClick={() => setStep(step + 1)}
              bg="bg.200"
            />
            <Text color="text.400">
              Didn't receive the code?{' '}
              <Box as="span" color="brand.primary">
                Resend it
              </Box>
            </Text>
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
};

const VerificationSuccess = ({ closeModal }: CloseModalProps) => {
  return (
    <Box>
      <Box textAlign="center" mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Verify Mobile Number
        </Heading>
        <Text>Your mobile number has been verified</Text>
      </Box>
      <ButtonComponent
        width="100%"
        color="text.500"
        text="Finish"
        onClick={closeModal}
        bg="bg.200"
      />
    </Box>
  );
};

const MobileVerificationFlow = ({ closeModal }: CloseModalProps) => {
  const [step, setStep] = useState<number>(1);
  return (
    <Box>
      {step === 1 && <VerificationForm step={step} setStep={setStep} />}
      {step === 2 && <OTPVerificationForm step={step} setStep={setStep} />}
      {step === 3 && <VerificationSuccess closeModal={closeModal} />}
    </Box>
  );
};

export default MobileVerificationFlow;
