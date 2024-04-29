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
import FormInput from '~/lib/utilities/FormInput';
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
                Name
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
                      color="text.200"
                      p="0"
                      pr="3"
                    >
                      +234
                    </InputLeftAddon>
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
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
            bg="bg.200"
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
        bg="bg.200"
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
