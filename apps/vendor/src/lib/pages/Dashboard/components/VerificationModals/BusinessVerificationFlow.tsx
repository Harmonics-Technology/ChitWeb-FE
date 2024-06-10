'use client';

import {
  Box,
  Heading,
  Text,
  Stack,
  FormLabel,
  Input,
  Flex,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { ButtonComponent } from '~/lib/components/Button';
import { UploadIcon } from '~/lib/components/Icons';
import { FormInput } from 'shared-ui';
import type { CloseModalProps, StepProps } from '~/lib/utilities/schema';

const BusinessVerificationForm = ({ step, setStep }: StepProps) => {
  const [taxNumber, setTaxNumber] = useState<string>('');
  return (
    <Box>
      <Box textAlign="center" mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Business Verification
        </Heading>
        <Text>Enter and verify your BVN to get started</Text>
      </Box>
      <Box>
        <Stack spacing="25px">
          <Box>
            <FormLabel color="text.200" fontSize={14}>
              Tax Identification Number (TIN)
            </FormLabel>
            <FormInput
              placeholder="Enter your TIN"
              type="text"
              value={taxNumber}
              setValue={setTaxNumber}
              width="100%"
            />
          </Box>
          <Box>
            <FormLabel color="text.200" fontSize={14}>
              Certificate of Registration
            </FormLabel>
            <FormLabel
              htmlFor="upload"
              w="100%"
              border="1px solid"
              borderColor="border.100"
              borderRadius="8px"
              p="3"
            >
              <Input type="file" id="upload" display="none" />
              <Flex alignItems="center" gap="8px">
                <UploadIcon />
                <Text fontWeight={400} color="text.800" fontSize={14}>
                  Upload certificate of registration
                </Text>
              </Flex>
            </FormLabel>
          </Box>
          <Box>
            <FormLabel color="text.200" fontSize={14}>
              Proof of address
            </FormLabel>
            <FormLabel
              htmlFor="upload"
              w="100%"
              border="1px solid"
              borderColor="border.100"
              borderRadius="8px"
              p="3"
            >
              <Input type="file" id="upload" display="none" />
              <Flex alignItems="center" gap="8px">
                <UploadIcon />
                <Text fontWeight={400} color="text.800" fontSize={14}>
                  Upload proof of utility bill
                </Text>
              </Flex>
            </FormLabel>
          </Box>
          <ButtonComponent
            width="100%"
            color="text.500"
            text="Verify Business"
            onClick={() => setStep(step + 1)}
            bg="bg.200"
          />
        </Stack>
      </Box>
    </Box>
  );
};

const VerificationSuccess = ({ closeModal }: CloseModalProps) => {
  return (
    <Box>
      <Box textAlign="center" mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Business Verified
        </Heading>
        <Text>Your Business has been successfully verified</Text>
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

const BusinessVerificationFlow = ({ closeModal }: CloseModalProps) => {
  const [step, setStep] = useState<number>(1);
  return (
    <Box>
      {step === 1 && <BusinessVerificationForm step={step} setStep={setStep} />}
      {step === 2 && <VerificationSuccess closeModal={closeModal} />}
    </Box>
  );
};

export default BusinessVerificationFlow;
