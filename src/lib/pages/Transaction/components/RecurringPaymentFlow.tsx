import {
  Box,
  Heading,
  FormLabel,
  Stack,
  Text,
  InputGroup,
  Image,
  InputRightElement,
  Input,
  Flex,
  Switch,
  Select,
  VStack,
  Button,
  PinInput,
  PinInputField,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import {
  ButtonComponent,
  OutlineButtonComponent,
} from '~/lib/components/Button';
import { GreyCopyIcon, UserIcon } from '~/lib/components/Icons';
import FormInput from '~/lib/utilities/FormInput';
import type { StepProps } from '~/lib/utilities/schema';

const PaymentSuccess = () => {
  return (
    <Box>
      <Box textAlign="center" mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Transaction Successful
        </Heading>
        <Text>
          Success! You’ve successfully set a scheduled payment to Chit10978
        </Text>
      </Box>
      <Stack spacing="16px">
        <ButtonComponent
          width="100%"
          color="text.500"
          text="Generate Receipt"
          onClick={() => {}}
          bg="bg.200"
        />
        <OutlineButtonComponent
          width="100%"
          color="bg.200"
          text="Done"
          onClick={() => {}}
        />
      </Stack>
    </Box>
  );
};

const PaymentConfirmation = ({ step, setStep }: StepProps) => {
  return (
    <Box>
      <VStack spacing="30px">
        <Image src="/assets/error-img.png" display="block" mx="auto" />
        <Heading fontSize={32} textAlign="center" color="text.200">
          Are you sure?
        </Heading>
        <Text textAlign="center" color="text.400" fontSize={18}>
          You are about to set a recurring payment of ₦5000 for Coursera
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

const PaymentSummary = ({ step, setStep }: StepProps) => {
  return (
    <Box>
      <Box mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={30}>
          Recurring Payment Summary
        </Heading>
      </Box>
      <Box>
        <Stack spacing="25px">
          <Stack spacing="10px" mb="10px">
            <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight={500} color="border.200">
                  Vendor
                </Text>
                <Text fontWeight={600} color="text.200">
                  Cousera
                </Text>
              </Flex>
            </Box>
            <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight={500} color="border.200">
                  Description
                </Text>
                <Text fontWeight={600} color="text.200">
                  Course payment
                </Text>
              </Flex>
            </Box>
            <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight={500} color="border.200">
                  Amount
                </Text>
                <Text fontWeight={600} color="text.200">
                  N5000
                </Text>
              </Flex>
            </Box>
            <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight={500} color="border.200">
                  Frequency
                </Text>
                <Text fontWeight={600} color="text.200">
                  Daily
                </Text>
              </Flex>
            </Box>
            <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight={500} color="border.200">
                  Start Date
                </Text>
                <Text fontWeight={600} color="text.200">
                  June 8, 2023.
                </Text>
              </Flex>
            </Box>
            <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight={500} color="border.200">
                  End Date
                </Text>
                <Text fontWeight={600} color="text.200">
                  December 28, 2023.
                </Text>
              </Flex>
            </Box>
          </Stack>

          <Stack spacing="14px">
            <ButtonComponent
              width="100%"
              text="Set Payment"
              color="text.500"
              bg="bg.200"
              onClick={() => setStep(step + 1)}
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

const ScheduledPaymentForm = ({ step, setStep }: StepProps) => {
  const [amount, setAmount] = useState<string>('');
  const [isRecurringPayment, setIsRecurringPayment] = useState<boolean>(false);
  return (
    <Box>
      <Box mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Recurring Payment
        </Heading>
      </Box>
      <Stack spacing="20px">
        <Box>
          <FormLabel color="text.200" fontSize={14}>
            Chit ID
          </FormLabel>
          <InputGroup w="100%">
            <Input
              type="tel"
              placeholder="Chit ID"
              fontSize={15}
              fontWeight={400}
            />
            <InputRightElement pointerEvents="none">
              <UserIcon />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <FormLabel color="text.200" fontSize={14}>
            Description
          </FormLabel>
          <FormInput
            type="number"
            placeholder="description of transaction"
            value={amount}
            setValue={setAmount}
            width="100%"
          />
        </Box>
        <Box>
          <FormLabel color="text.200" fontSize={14}>
            Amount
          </FormLabel>
          <FormInput
            type="number"
            placeholder="Amount"
            value={amount}
            setValue={setAmount}
            width="100%"
          />
        </Box>
        <Box>
          <FormLabel color="text.200" fontSize={14}>
            Frequency
          </FormLabel>
          <Select>
            <option value="2 weeks">Daily</option>
            <option value="2 weeks">Weekly</option>
            <option value="2 weeks">Monthly</option>
          </Select>
        </Box>
        <Box>
          <Flex alignContent="center" gap="10px">
            <Box w="50%">
              <FormLabel color="text.200" fontSize={14}>
                Start Date
              </FormLabel>
              <FormInput
                type="date"
                placeholder="Amount"
                value={amount}
                setValue={setAmount}
                width="100%"
              />
            </Box>
            <Box w="50%">
              <FormLabel color="text.200" fontSize={14}>
                End Date
              </FormLabel>
              <FormInput
                type="date"
                placeholder="Amount"
                value={amount}
                setValue={setAmount}
                width="100%"
              />
            </Box>
          </Flex>
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

const RecurringPaymentFlow = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <Box>
      {step === 1 && <ScheduledPaymentForm step={step} setStep={setStep} />}
      {step === 2 && <PaymentSummary step={step} setStep={setStep} />}
      {step === 3 && <TransactionPinForm step={step} setStep={setStep} />}
      {step === 4 && <PaymentConfirmation step={step} setStep={setStep} />}
      {step === 5 && <PaymentSuccess />}
    </Box>
  );
};

export default RecurringPaymentFlow;
