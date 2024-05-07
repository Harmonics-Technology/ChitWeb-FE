import {
  Box,
  Heading,
  Text,
  FormLabel,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  VStack,
  PinInput,
  PinInputField,
  Image,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';

import {
  ButtonComponent,
  IconButtonComponent,
  OutlineButtonComponent,
} from '~/lib/components/Button';
import { HomeIcon, GreyCopyIcon } from '~/lib/components/Icons';
import FormInput from '~/lib/utilities/FormInput';
import type { StepProps, CloseModalProps } from '~/lib/utilities/schema';

const TransactionSuccess = ({ closeModal }: CloseModalProps) => {
  return (
    <Box>
      <Box textAlign="center" mb="35px">
        <Heading mb="20px" color="text.200" fontWeight={700} fontSize={30}>
          Chit Generation Successful
        </Heading>
        <Text>
          Please wait a moment, your generated ₦5000 worth of CHIT will reflect
          in your balance shortly
        </Text>
      </Box>
      <Stack spacing="16px">
        <IconButtonComponent
          width="100%"
          color="text.500"
          text="Back Home"
          onClick={closeModal}
          bg="bg.200"
          icon={HomeIcon}
          flip
        />
        <IconButtonComponent
          width="100%"
          color="bg.200"
          text="Copy Reference ID"
          onClick={() => {}}
          icon={GreyCopyIcon}
          bg="text.500"
          flip
        />
      </Stack>
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

const GenerateChitSummary = ({ step, setStep }: StepProps) => {
  return (
    <Box>
      <Box mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Generate CHIT Summary
        </Heading>
      </Box>
      <Box>
        <Stack spacing="20px">
          <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize={15} color="border.200">
                Amount Generated
              </Text>
              <Text fontSize={15} color="text.200" fontWeight={600}>
                ₦5000.00
              </Text>
            </Flex>
          </Box>
          <Box
            borderBottom="1px solid"
            borderColor="brand.100"
            py="3"
            px="2"
            mb="15px"
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize={15} color="border.200">
                Transaction Fee
              </Text>
              <Text fontSize={15} color="text.200" fontWeight={600}>
                ₦10.00
              </Text>
            </Flex>
          </Box>
          <Stack spacing="12px">
            <ButtonComponent
              width="100%"
              text="Generate Chit"
              color="text.500"
              bg="bg.200"
              onClick={() => setStep(step + 1)}
            />
            <OutlineButtonComponent
              width="100%"
              text="Close"
              color="bg.200"
              onClick={() => {}}
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

const GenerateChitForm = ({ step, setStep }: StepProps) => {
  const [amount, setAmount] = useState<string>('');

  return (
    <Box>
      <Box mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Generate CHIT
        </Heading>
      </Box>
      <Stack spacing="35px">
        <Box>
          <FormLabel color="text.200" fontSize={14}>
            Amount
          </FormLabel>
          <FormInput
            type="number"
            placeholder="₦ 00.00"
            value={amount}
            setValue={setAmount}
            width="100%"
          />
        </Box>
        <Stack spacing="12px">
          <ButtonComponent
            width="100%"
            text="Proceed"
            color="text.500"
            bg="bg.200"
            onClick={() => setStep(step + 1)}
          />
          <OutlineButtonComponent
            width="100%"
            text="Close"
            color="bg.200"
            onClick={() => {}}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

const GenerateChitFlow = ({ closeModal }: CloseModalProps) => {
  const [step, setStep] = useState<number>(1);
  return (
    <Box>
      {step === 1 && <GenerateChitForm step={step} setStep={setStep} />}
      {step === 2 && <GenerateChitSummary step={step} setStep={setStep} />}
      {step === 3 && <TransactionPinForm step={step} setStep={setStep} />}
      {step === 4 && <TransactionSuccess closeModal={closeModal} />}
    </Box>
  );
};

export default GenerateChitFlow;
