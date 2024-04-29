import {
  Box,
  FormLabel,
  Heading,
  Text,
  Stack,
  Input,
  Flex,
  Image,
  PinInput,
  PinInputField,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import {
  ButtonComponent,
  OutlineButtonComponent,
} from '~/lib/components/Button';
import CustomModal from '~/lib/components/Modal';
import type { StepProps } from '~/lib/utilities/schema';
import { OpenModalProps } from '~/lib/utilities/schema';

const TransactionSuccess = () => {
  return (
    <Box>
      <Box textAlign="center" mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Payment Successful
        </Heading>
        <Text>
          {' '}
          Success! The request has been sent, your account will be credited once
          approved!{' '}
        </Text>
      </Box>

      <ButtonComponent
        width="100%"
        color="text.500"
        bg="bg.200"
        text="Done"
        onClick={() => {}}
      />
    </Box>
  );
};

const RequestConfirmation = ({ step, setStep }: StepProps) => {
  return (
    <Box>
      <VStack spacing="30px">
        <Image src="/assets/error-img.png" display="block" mx="auto" />
        <Heading fontSize={32} textAlign="center" color="text.200">
          Are you sure?
        </Heading>
        <Text textAlign="center" color="text.400" fontSize={18}>
          You are requesting ₦5000 from Yinka Olabowale
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
                  bg="text.500"
                  w="60px"
                  h="60px"
                  fontSize={25}
                  fontWeight={700}
                />
                <PinInputField
                  bg="text.500"
                  w="60px"
                  h="60px"
                  fontSize={25}
                  fontWeight={700}
                />
                <PinInputField
                  bg="text.500"
                  w="60px"
                  h="60px"
                  fontSize={25}
                  fontWeight={700}
                />
                <PinInputField
                  bg="text.500"
                  w="60px"
                  h="60px"
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

const RequestSummary = ({ step, setStep }: StepProps) => {
  return (
    <Box>
      <Stack spacing="32px">
        <Box>
          <Heading fontSize={24} fontWeight={700}>
            Request Fund
          </Heading>
        </Box>
        <Box borderBottom="1px solid" borderColor="border.100" px="2" pb="2">
          <Flex justifyContent="space-between">
            <Text fontSize={15} color="text.800" fontWeight={400}>
              Request from
            </Text>
            <Heading fontSize={16} fontWeight={600}>
              Adewole Adeyinka
            </Heading>
          </Flex>
        </Box>
        <Box borderBottom="1px solid" borderColor="border.100" px="2" pb="2">
          <Flex justifyContent="space-between">
            <Text fontSize={15} color="text.800" fontWeight={400}>
              Top up Amount
            </Text>
            <Heading fontSize={16} fontWeight={600}>
              ₦60,100
            </Heading>
          </Flex>
        </Box>
        <ButtonComponent
          bg="bg.200"
          text="Request Fund"
          color="text.500"
          onClick={() => setStep(step + 1)}
          width="100%"
        />
      </Stack>
    </Box>
  );
};

const RequestModalFlow = () => {
  const [step, setStep] = useState<number>(0);
  return (
    <Box>
      {step === 0 && <RequestSummary step={step} setStep={setStep} />}
      {step === 1 && <TransactionPinForm step={step} setStep={setStep} />}
      {step === 2 && <RequestConfirmation step={step} setStep={setStep} />}
      {step === 3 && <TransactionSuccess />}
    </Box>
  );
};

const RequestFromOthers = () => {
  const [openPaymentSuccessModal, setOpenPaymentSuccessModal] =
    useState<boolean>(false);
  return (
    <Box>
      <Stack spacing="30px">
        <Box>
          <Heading mb="8px" fontSize={24} fontWeight={700}>
            Request Funds
          </Heading>
          <Text color="text.400">Send a request to any CHIT user</Text>
        </Box>
        <Box>
          <FormLabel fontSize={14}>Email/Chit ID</FormLabel>
          <Input
            type="email"
            _placeholder={{ fontSize: 14, color: 'text.800' }}
            bg="text.500"
            w="100%"
            outline="none"
            placeholder="Enter user email/chit ID"
          />
        </Box>
        <Box>
          <FormLabel fontSize={14}>Amount</FormLabel>
          <Input
            type="number"
            _placeholder={{ fontSize: 14, color: 'text.800' }}
            bg="text.500"
            w="100%"
            outline="none"
            placeholder="Amount"
          />
        </Box>
        <ButtonComponent
          bg="bg.200"
          text="Proceed"
          color="text.500"
          onClick={() => setOpenPaymentSuccessModal(true)}
          width="100%"
        />
      </Stack>
      <CustomModal
        isOpen={openPaymentSuccessModal}
        onClose={() => setOpenPaymentSuccessModal(false)}
      >
        <RequestModalFlow />
      </CustomModal>
    </Box>
  );
};

export default RequestFromOthers;
