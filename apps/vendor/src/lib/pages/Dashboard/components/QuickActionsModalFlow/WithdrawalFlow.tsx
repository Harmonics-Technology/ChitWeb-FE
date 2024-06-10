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
import { HomeIcon, BlueDownloadIcon } from '~/lib/components/Icons';
import { FormInput } from 'shared-ui';
import type { StepProps, CloseModalProps } from '~/lib/utilities/schema';

const TransactionSuccess = ({ closeModal }: CloseModalProps) => {
  return (
    <Box>
      <Box textAlign="center" mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Transaction Successful
        </Heading>
        <Text>You have successfully withdrawn ₦5000 from your Chit wallet</Text>
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
          text="Download Reciept"
          onClick={() => {}}
          icon={BlueDownloadIcon}
          bg="text.500"
          flip
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
          You are about to make a withdrawal of ₦5000 from your Chit wallet
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
              text="Finish"
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

const WithdrawalSummary = ({ step, setStep }: StepProps) => {
  return (
    <Box>
      <Box mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Withdrawal Summary
        </Heading>
      </Box>
      <Box>
        <Stack spacing="10px">
          <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize={15} color="border.200">
                Amount to withdraw
              </Text>
              <Text fontSize={15} color="text.200" fontWeight={600}>
                ₦5000.00
              </Text>
            </Flex>
          </Box>
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
            <Flex alignItems="flex-start" justifyContent="space-between">
              <Text fontSize={15} color="border.200">
                Recipient details
              </Text>
              <Text fontSize={15} color="text.200" fontWeight={600} w="120px">
                3085645673, Ogunjimi Peace
              </Text>
            </Flex>
          </Box>
          <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize={15} color="border.200">
                Transaction Fee
              </Text>
              <Text fontSize={15} color="text.200" fontWeight={600}>
                ₦10.00
              </Text>
            </Flex>
          </Box>
          <ButtonComponent
            width="100%"
            text="Withdraw"
            color="text.500"
            bg="bg.200"
            onClick={() => setStep(step + 1)}
          />
        </Stack>
      </Box>
    </Box>
  );
};

const WithdrawalForm = ({ step, setStep }: StepProps) => {
  const [amount, setAmount] = useState<string>('');

  return (
    <Box>
      <Box mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Withdrawal
        </Heading>
      </Box>
      <Stack spacing="25px">
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
        <Box>
          <FormLabel color="text.200" fontSize={14}>
            Bank
          </FormLabel>
          <Select>
            <option value="Kuda bank">Kuda Bank</option>
            <option value="Kuda bank">Kuda Bank</option>
            <option value="Kuda bank">Kuda Bank</option>
            <option value="Kuda bank">Kuda Bank</option>
            <option value="Kuda bank">Kuda Bank</option>
          </Select>
        </Box>
        <Box>
          <FormLabel color="text.200" fontSize={14}>
            Account Number
          </FormLabel>
          <FormInput
            type="number"
            placeholder="Account Number"
            value={amount}
            setValue={setAmount}
            width="100%"
          />
        </Box>
        <ButtonComponent
          width="100%"
          text="Proceed"
          color="text.500"
          bg="bg.200"
          onClick={() => setStep(step + 1)}
        />
      </Stack>
    </Box>
  );
};

const WithdrawalFlow = ({ closeModal }: CloseModalProps) => {
  const [step, setStep] = useState<number>(1);
  return (
    <Box>
      {step === 1 && <WithdrawalForm step={step} setStep={setStep} />}
      {step === 2 && <WithdrawalSummary step={step} setStep={setStep} />}
      {step === 3 && <TransactionPinForm step={step} setStep={setStep} />}
      {step === 4 && <TransferConfirmation step={step} setStep={setStep} />}
      {step === 5 && <TransactionSuccess closeModal={closeModal} />}
    </Box>
  );
};

export default WithdrawalFlow;
