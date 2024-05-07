import {
  Box,
  Heading,
  Stack,
  Text,
  VStack,
  PinInput,
  PinInputField,
  Flex,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { ButtonComponent } from '~/lib/components/Button';
import Stepper from '~/lib/components/Stepper';
import type { StepProps } from '~/lib/utilities/schema';

const TransactionPassword = () => {
  return (
    <Box>
      <Stack spacing="32px">
        <Box>
          <FormLabel>Security Question Answer</FormLabel>
          <Input
            py="6"
            type="password"
            bg="text.500"
            placeholder="Enter your password"
          />
        </Box>
        <ButtonComponent
          width="100%"
          color="text.500"
          text="Proceed"
          onClick={() => {}}
          bg="bg.200"
        />
      </Stack>
    </Box>
  );
};

const SetSecurityQuestion = ({ step, setStep }: StepProps) => {
  return (
    <Box>
      <Stack spacing="24px" mb="32px">
        <Box>
          <FormLabel>Security Question</FormLabel>
          <Input
            py="6"
            type="text"
            bg="text.500"
            placeholder="create your security question"
          />
        </Box>
        <Box>
          <FormLabel>Security Question Answer</FormLabel>
          <Input
            py="6"
            type="text"
            bg="text.500"
            placeholder="Enter your security question answer"
          />
        </Box>
      </Stack>
      <ButtonComponent
        width="100%"
        color="text.500"
        text="Proceed"
        onClick={() => setStep(step + 1)}
        bg="bg.200"
      />
    </Box>
  );
};

const ConfirmTransactionPin = ({ step, setStep }: StepProps) => {
  const [otp, setOtp] = useState<string>('');
  return (
    <Box>
      <VStack spacing="32px">
        <Text color="text.400">Confirm your transaction pin</Text>
        <Flex gap="30px" alignItems="center" mb="30px">
          <PinInput
            otp
            placeholder="*"
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <PinInputField w="60px" h="60px" fontSize={25} fontWeight={700} />
            <PinInputField w="60px" h="60px" fontSize={25} fontWeight={700} />
            <PinInputField w="60px" h="60px" fontSize={25} fontWeight={700} />
            <PinInputField w="60px" h="60px" fontSize={25} fontWeight={700} />
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
  );
};

const CreatePinForm = ({ step, setStep }: StepProps) => {
  const [otp, setOtp] = useState<string>('');
  return (
    <Box>
      <VStack spacing="32px">
        <Text color="text.400">Enter your transaction pin</Text>
        <Flex gap="30px" alignItems="center" mb="30px">
          <PinInput
            otp
            placeholder="*"
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <PinInputField w="60px" h="60px" fontSize={25} fontWeight={700} />
            <PinInputField w="60px" h="60px" fontSize={25} fontWeight={700} />
            <PinInputField w="60px" h="60px" fontSize={25} fontWeight={700} />
            <PinInputField w="60px" h="60px" fontSize={25} fontWeight={700} />
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
  );
};

const TransactionPinFlow = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <Box>
      <Stack spacing="32px">
        <Heading fontSize={24} textAlign="center" fontWeight={700}>
          Transaction Pin
        </Heading>
        <Stepper step={step} setStep={setStep} />
        {step === 1 && <CreatePinForm step={step} setStep={setStep} />}
        {step === 2 && <ConfirmTransactionPin step={step} setStep={setStep} />}
        {step === 3 && <SetSecurityQuestion step={step} setStep={setStep} />}
        {step === 4 && <TransactionPassword />}
      </Stack>
    </Box>
  );
};

const TransactionPin = () => {
  return (
    <Box>
      <TransactionPinFlow />
    </Box>
  );
};

export default TransactionPin;
