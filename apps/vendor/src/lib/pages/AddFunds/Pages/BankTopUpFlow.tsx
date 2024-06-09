import {
  Box,
  Stack,
  Heading,
  Text,
  VStack,
  PinInput,
  PinInputField,
  Image,
  Flex,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import {
  IconButtonComponent,
  OutlineButtonComponent,
  ButtonComponent,
} from '~/lib/components/Button';
import { HomeIcon, BlueDownloadIcon } from '~/lib/components/Icons';
import type { StepProps, CloseModalProps } from '~/lib/utilities/schema';

const TransactionSuccess = ({ closeModal }: CloseModalProps) => {
  return (
    <Box>
      <Box textAlign="center" mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Transaction Successful
        </Heading>
        <Text>Success! your account will be credited with ₦20,000</Text>
      </Box>
      <Stack spacing="16px">
        <ButtonComponent
          width="100%"
          color="text.500"
          text="Done"
          onClick={closeModal}
          bg="bg.200"
        />
      </Stack>
    </Box>
  );
};

const TransferConfirmation = ({ step, setStep }: StepProps) => {
  return (
    <Box>
      <VStack spacing="30px">
        <Image src="/assets/error-img.png" display="block" mx="auto" />
        <Heading fontSize={32} textAlign="center" color="text.200">
          Are you sure?
        </Heading>
        <Text textAlign="center" color="text.400" fontSize={18}>
          You are about to fund your wallet with ₦20,000
        </Text>
        <Box w="100%">
          <Flex alignItems="center" gap="16px">
            <OutlineButtonComponent
              width="50%"
              color="bg.200"
              text="Cancel"
              onClick={() => {}}
            />
            <ButtonComponent
              width="50%"
              color="text.500"
              text="Proceed"
              onClick={() => setStep(step + 1)}
              bg="bg.200"
            />
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

const TransactionPinForm = ({ step, setStep }: StepProps) => {
  const [otp, setOtp] = useState<string>('');
  return (
    <Box>
      <Stack spacing="30px">
        <Box>
          <Heading color="text.200" fontWeight={700} fontSize={32}>
            Enter Transaction Pin
          </Heading>
        </Box>
        <Box>
          <VStack>
            <Flex gap="30px" alignItems="center" mb="30px">
              <PinInput
                otp
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
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
};

const TopUpSummary = ({ step, setStep }: StepProps) => {
  return (
    <Box>
      <Box mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Bank Top Up
        </Heading>
      </Box>
      <Box>
        <Stack spacing="5px">
          <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize={15} color="border.200">
                Bank
              </Text>
              <Text fontSize={15} color="text.200" fontWeight={600}>
                First Bank
              </Text>
            </Flex>
          </Box>
          <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize={15} color="border.200">
                Account Details
              </Text>
              <Text fontSize={15} color="text.200" w="120px" fontWeight={600}>
                3085645673, Ogunjimi Peace
              </Text>
            </Flex>
          </Box>
          <Box
            borderBottom="1px solid"
            borderColor="brand.100"
            py="3"
            px="2"
            mb="25px"
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize={15} color="border.200">
                Top up Amount
              </Text>
              <Text fontSize={15} color="text.200" fontWeight={600}>
                ₦20,000.00
              </Text>
            </Flex>
          </Box>
          <ButtonComponent
            width="100%"
            text="Request Bank Top Up"
            color="text.500"
            bg="bg.200"
            onClick={() => setStep(step + 1)}
          />
        </Stack>
      </Box>
    </Box>
  );
};

const BankTopUpFlow = ({ closeModal }: CloseModalProps) => {
  const [step, setStep] = useState<number>(1);
  return (
    <Box>
      {step === 1 && <TopUpSummary step={step} setStep={setStep} />}
      {step === 2 && <TransactionPinForm step={step} setStep={setStep} />}
      {step === 3 && <TransferConfirmation step={step} setStep={setStep} />}
      {step === 4 && <TransactionSuccess closeModal={closeModal} />}
    </Box>
  );
};

export default BankTopUpFlow;
