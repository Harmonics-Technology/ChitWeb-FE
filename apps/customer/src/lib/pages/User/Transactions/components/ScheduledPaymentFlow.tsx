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
import { FormInput } from 'shared-ui';
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

const ScheduledPaymentForm1 = ({ step, setStep }: StepProps) => {
  const [amount, setAmount] = useState<string>('');
  return (
    <Box>
      <Box mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={25}>
          Scheduled Payment
        </Heading>
      </Box>
      <Box>
        <Stack spacing="25px">
          <Box>
            <FormLabel color="text.200" fontSize={14}>
              Wallet ID
            </FormLabel>
            <InputGroup w="100%">
              <Input
                type="tel"
                placeholder="Wallet ID"
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
              Date
            </FormLabel>
            <FormInput
              type="date"
              value={amount}
              setValue={setAmount}
              width="100%"
            />
          </Box>
          <Stack spacing="14px">
            <ButtonComponent
              width="100%"
              text="Proceed"
              color="text.500"
              bg="brand.primary"
              onClick={() => setStep(step + 1)}
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

const ScheduledPaymentForm2 = ({ step, setStep }: StepProps) => {
  const [amount, setAmount] = useState<string>('');
  const [isRecurringPayment, setIsRecurringPayment] = useState<boolean>(false);
  return (
    <Box>
      <Box mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={25}>
          Schedule Payment
        </Heading>
      </Box>
      <Stack spacing="25px">
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
            Date
          </FormLabel>
          <FormInput
            type="date"
            placeholder="Amount"
            value={amount}
            setValue={setAmount}
            width="100%"
          />
        </Box>
        <Box>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize={14} color="text.200" fontWeight={500}>
              Enable Recurring Payment{' '}
              <Box as="span" bg="brand.100" p="2" color="brand.primary">
                Highly Recommended
              </Box>
            </Text>
            <Switch
              isChecked={isRecurringPayment}
              onChange={() => setIsRecurringPayment(!isRecurringPayment)}
            />
          </Flex>
        </Box>
        {isRecurringPayment && (
          <Box>
            <Text color="text.200" fontSize={14} mb="15px">
              Lörem ipsum chatbots astromani. Demifaktisk ekomatisk netel.
              Neoception teletion. Rengar synstik.
            </Text>
            <FormLabel color="text.200" fontSize={14}>
              Frequency
            </FormLabel>
            <Select>
              <option value="2 weeks">2 weeks</option>
              <option value="2 weeks">2 weeks</option>
              <option value="2 weeks">2 weeks</option>
              <option value="2 weeks">2 weeks</option>
              <option value="2 weeks">2 weeks</option>
            </Select>
          </Box>
        )}
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

const ScheduledPaymentFlow = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <Box>
      {step === 1 && <ScheduledPaymentForm1 step={step} setStep={setStep} />}
      {step === 2 && <ScheduledPaymentForm2 step={step} setStep={setStep} />}
      {step === 3 && <TransactionPinForm step={step} setStep={setStep} />}
      {step === 4 && <PaymentSuccess />}
    </Box>
  );
};

export default ScheduledPaymentFlow;
