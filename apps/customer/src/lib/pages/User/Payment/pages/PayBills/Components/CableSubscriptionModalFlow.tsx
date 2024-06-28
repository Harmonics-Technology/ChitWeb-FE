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
  IconButtonComponent,
} from '~/lib/components/Button';
import { GreyCopyIcon, UserIcon, HomeIcon } from '~/lib/components/Icons';
import { FormInput } from 'shared-ui';
import type { StepProps } from '~/lib/utilities/schema';

const PaymentSuccess = () => {
  return (
    <Box>
      <Box textAlign="center" mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Payment Successful
        </Heading>
        <Text> You’ve successfully made payment to DSTV</Text>
      </Box>
      <IconButtonComponent
        width="100%"
        color="text.500"
        text="Go Back"
        onClick={() => {}}
        bg="bg.200"
        icon={HomeIcon}
        flip
      />
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

const BillPaymentSummary = ({ step, setStep }: StepProps) => {
  const [isRecurringPayment, setIsRecurringPayment] = useState<boolean>(false);
  return (
    <Box>
      <Box mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={24}>
          TV and Cable Subscription Summary
        </Heading>
      </Box>
      <Box>
        <Stack spacing="25px">
          <Stack spacing="10px" mb="20px">
            <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight={500} color="border.200">
                  Operator
                </Text>
                <Text fontWeight={600} color="text.200">
                  DSTV
                </Text>
              </Flex>
            </Box>
            <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight={500} color="border.200">
                  Package
                </Text>
                <Text fontWeight={600} color="text.200">
                  Pre-paid
                </Text>
              </Flex>
            </Box>
            <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight={500} color="border.200">
                  Meter Number
                </Text>
                <Text fontWeight={600} color="text.200">
                  1213414151751ghb
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
          </Stack>
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
          <Stack>
            <ButtonComponent
              width="100%"
              text="Make Payment"
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

const BillPaymentForm = ({ step, setStep }: StepProps) => {
  const [amount, setAmount] = useState<string>('');
  return (
    <Box>
      <Box mb="20px">
        <Heading color="text.200" fontWeight={700} fontSize={32}>
          TV and Cable Subscription
        </Heading>
      </Box>
      <Stack spacing="15px">
        <Box>
          <FormLabel color="text.200" fontSize={14}>
            Operator
          </FormLabel>
          <Select>
            <option value="ikeja">DSTV</option>
            <option value="eko">Eko Electric</option>
            <option value="phed">Port Harcourt Electric</option>
          </Select>
        </Box>
        <Box>
          <FormLabel color="text.200" fontSize={14}>
            Package
          </FormLabel>
          <Select>
            <option value="prepaid">Prepaid</option>
            <option value="postpaid">Postpaid</option>
          </Select>
        </Box>
        <Box>
          <FormLabel color="text.200" fontSize={14}>
            Smart Card Number
          </FormLabel>
          <FormInput
            type="number"
            placeholder="Enter Meter Number"
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
        <Box mb="10px">
          <FormLabel color="text.200" fontSize={14}>
            Pay from
          </FormLabel>
          <Select>
            <option value="prepaid">Chit wallet</option>
            <option value="postpaid">Card</option>
          </Select>
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

const CableSubscriptionModalFlow = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <Box>
      {step === 1 && <BillPaymentForm step={step} setStep={setStep} />}
      {step === 2 && <BillPaymentSummary step={step} setStep={setStep} />}
      {step === 3 && <TransactionPinForm step={step} setStep={setStep} />}
      {step === 4 && <PaymentSuccess />}
    </Box>
  );
};

export default CableSubscriptionModalFlow;
