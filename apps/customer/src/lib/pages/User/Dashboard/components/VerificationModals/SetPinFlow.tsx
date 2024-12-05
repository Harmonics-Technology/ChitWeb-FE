import {
  Box,
  Heading,
  Text,
  FormLabel,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { ButtonComponent } from '~/lib/components/Button';
import { FormInput } from 'shared-ui';
import type { CloseModalProps, StepProps } from '~/lib/utilities/schema';

const VerificationSuccess = ({ closeModal }: CloseModalProps) => {
  return (
    <Box>
      <Box textAlign="center" mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Transaction Pin Set
        </Heading>
        <Text>Your Transaction Pin has been successfully set</Text>
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

const TransactionPinForm = ({ step, setStep }: StepProps) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => setShow(!show);
  const [transactionPin, setTransactionPin] = useState<string>('');
  return (
    <Box>
      <Box textAlign="center" mb="40px">
        <Heading mb="12px" color="text.200" fontWeight={700} fontSize={32}>
          Set Transaction Pin
        </Heading>
        <Text color="text.100">
          Final step; Secure your transactions, set a pin for your transactions
        </Text>
      </Box>
      <Stack spacing="20px">
        <Box>
          <FormLabel color="text.200" fontSize={14}>
            Create Pin
          </FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              w="100%"
              value={transactionPin}
              onChange={(e) => setTransactionPin(e.target.value)}
              type={show ? 'text' : 'password'}
              placeholder="Create a four-digit transaction pin"
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
        <Box>
          <FormLabel color="text.200" fontSize={14}>
            Set Security Question
          </FormLabel>
          <FormInput
            type="number"
            value={transactionPin}
            setValue={setTransactionPin}
            width="100%"
            placeholder="Set a security question"
          />
        </Box>
        <Box>
          <FormLabel color="text.200" fontSize={14}>
            Answer to Security Question
          </FormLabel>
          <FormInput
            type="number"
            value={transactionPin}
            setValue={setTransactionPin}
            width="100%"
            placeholder="Enter answer to security question"
          />
        </Box>
        <Box>
          <FormLabel fontSize={16} color="text.200">
            Password
          </FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              w="100%"
              value={transactionPin}
              onChange={(e) => setTransactionPin(e.target.value)}
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
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
        <ButtonComponent
          text="Set Pin"
          color="text.500"
          bg="brand.primary"
          onClick={() => setStep(step + 1)}
          width="100%"
        />
      </Stack>
    </Box>
  );
};

const SetPinFlow = ({ closeModal }: CloseModalProps) => {
  const [step, setStep] = useState<number>(1);
  return (
    <Box>
      {step === 1 && <TransactionPinForm step={step} setStep={setStep} />}
      {step === 2 && <VerificationSuccess closeModal={closeModal} />}
    </Box>
  );
};

export default SetPinFlow;
