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
          Claim Generation Successful
        </Heading>
        <Text>
          Please wait a moment, your claimed ₦5000 worth of CHIT will reflect in
          your balance shortly
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

const ClaimChitForm = ({ step, setStep }: StepProps) => {
  const [amount, setAmount] = useState<string>('');

  return (
    <Box>
      <Box mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Claim CHIT
        </Heading>
      </Box>
      <Stack spacing="35px">
        <Box>
          <FormLabel color="text.200" fontSize={14}>
            Reference ID
          </FormLabel>
          <FormInput
            type="text"
            placeholder="Enter generated CHIT ID"
            value={amount}
            setValue={setAmount}
            width="100%"
          />
        </Box>
        <Stack spacing="12px">
          <ButtonComponent
            width="100%"
            text="Claim CHIT"
            color="text.500"
            bg="bg.200"
            onClick={() => setStep(step + 1)}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

const ClaimChitFlow = ({ closeModal }: CloseModalProps) => {
  const [step, setStep] = useState<number>(1);
  return (
    <Box>
      {step === 1 && <ClaimChitForm step={step} setStep={setStep} />}
      {step === 2 && <TransactionSuccess closeModal={closeModal} />}
    </Box>
  );
};

export default ClaimChitFlow;
