'use client';

import {
  Box,
  Heading,
  Text,
  FormLabel,
  FormControl,
  Stack,
  Flex,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { ButtonComponent } from '~/lib/components/Button';
import { FormInput } from 'shared-ui';
import type { CloseModalProps, StepProps } from '~/lib/utilities/schema';

const BvnVerificationForm = ({ step, setStep }: StepProps) => {
  const [fullName, setFullName] = useState<string>('');
  return (
    <Box>
      <Box textAlign="center" mb="40px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          BVN Verification
        </Heading>
        <Text>Enter and verify your BVN details to get started</Text>
      </Box>
      <Box>
        <FormControl>
          <Stack spacing="16px" mb="30px">
            <Box>
              <FormLabel color="text.200" fontSize={14}>
                Full Name
              </FormLabel>
              <FormInput
                type="text"
                placeholder="Enter the name linked to your BVN"
                width="100%"
                value={fullName}
                setValue={setFullName}
              />
            </Box>
            <Box>
              <FormLabel fontSize={14} color="text.200">
                Phone Number
              </FormLabel>
              <FormInput
                type="tel"
                placeholder="Enter the phone number linked to your BVN"
                width="100%"
                value={fullName}
                setValue={setFullName}
              />
            </Box>
            <Box>
              <FormLabel color="text.200" fontSize={14}>
                BVN
              </FormLabel>
              <FormInput
                type="text"
                placeholder="Enter the name linked to your BVN"
                width="100%"
                value={fullName}
                setValue={setFullName}
              />
            </Box>
          </Stack>
          <ButtonComponent
            width="100%"
            color="text.500"
            text="Verify BVN"
            onClick={() => setStep(step + 1)}
            bg="brand.primary"
          />
        </FormControl>
      </Box>
    </Box>
  );
};

const VerificationSuccess = ({ closeModal }: CloseModalProps) => {
  return (
    <Box>
      <Box textAlign="center" mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          BVN Verified
        </Heading>
        <Text>Your BVN has been successfully verified</Text>
      </Box>
      <ButtonComponent
        width="100%"
        color="text.500"
        text="Finish"
        onClick={closeModal}
        bg="brand.primary"
      />
    </Box>
  );
};

const BvnVerificationFlow = ({ closeModal }: CloseModalProps) => {
  const [step, setStep] = useState<number>(1);
  return (
    <Box>
      {step === 1 && <BvnVerificationForm step={step} setStep={setStep} />}
      {step === 2 && <VerificationSuccess closeModal={closeModal} />}
    </Box>
  );
};

export default BvnVerificationFlow;
