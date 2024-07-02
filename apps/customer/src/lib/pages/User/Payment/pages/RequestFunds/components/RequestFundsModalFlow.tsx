import { Box, Heading, Text, Stack, Flex, VStack, PinInput, PinInputField, Image, FormLabel, Select, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ButtonComponent, IconButtonComponent, OutlineButtonComponent } from '~/lib/components/Button';
import { StepProps} from '~/lib/utilities/schema';
import {HomeIcon, UserIcon} from '~/lib/components/Icons'
import { FormInput } from 'shared-ui';



const RequestFundSuccess = () => {
  return (
    <Box>
      <Box textAlign="center" mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={25}>
          Transaction Successful
        </Heading>
        <Text> Success! The request has been sent, your account will be credited once
          approved!</Text>
      </Box>
      <IconButtonComponent
        width="100%"
        color="text.500"
        text="Go Back"
        onClick={() => {}}
        bg="brand.primary"
        icon={HomeIcon}
        flip
      />
    </Box>
  );
};


const PaymentConfirmation = ({ step, setStep }: StepProps) => {
  return (
    <Box>
      <VStack spacing="30px">
        <Image src="/assets/images/error-img.png" display="block" mx="auto" />
        <Heading fontSize={25} textAlign="center" color="text.200">
          Are you sure?
        </Heading>
        <Text textAlign="center" color="text.400" fontSize={18}>
          You are requesting ₦5000 worth of CHIT from Yinka
        </Text>
        <Box w="100%">
          <Flex alignItems="center" gap="16px">
            <OutlineButtonComponent
              width="50%"
              color="brand.primary"
              text="Cancel"
              onClick={() => { }}
            />
            <ButtonComponent
              width="50%"
              color="text.500"
              text="Proceed"
              onClick={() => setStep(step + 1)}
              bg="brand.primary"
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
          <Heading color="text.200" fontWeight={700} fontSize={25}>
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
              bg="brand.primary"
            />
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
};

const RequestFundsSummary = ({ step, setStep }: StepProps) => {
  const [isRecurringPayment, setIsRecurringPayment] = useState<boolean>(false);
  return (
    <Box>
      <Box mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={25}>
           Requst Funds
        </Heading>
      </Box>
      <Box>
        <Stack spacing="25px">
          <Stack spacing="10px" mb="20px">
            <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight={500} color="border.200">
                  Request from 
                </Text>
                <Text fontWeight={600} color="text.200">
                  Yinka Olabowale
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
                  Description
                </Text>
                <Text fontWeight={600} color="text.200">
                  Healthcare Products
                </Text>
              </Flex>
            </Box>
            <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight={500} color="border.200">
                  Transaction Fee
                </Text>
                <Text fontWeight={600} color="text.200">
                  ₦10.00
                </Text>
              </Flex>
            </Box>
          </Stack>
          <Stack>
            <ButtonComponent
              width="100%"
              text="Request Fund"
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

const RequestFundsForm = ({step, setStep}: StepProps) => {
  const [amount, setAmount] = useState<string>('');
  return (
    <Box>
      <Box mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={25}>
          Request Funds
        </Heading>
      </Box>
      <Stack spacing="20px">
        <Box>
          <FormLabel color="text.200" fontSize={14}>
            Wallet ID
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
            Description
          </FormLabel>
          <FormInput
            type="number"
            placeholder="description of fund request"
            value={amount}
            setValue={setAmount}
            width="100%"
          />
        </Box>
        <ButtonComponent
          width="100%"
          text="Proceed"
          color="text.500"
          bg="brand.primary"
          onClick={() => setStep(step + 1)}
        />
      </Stack>
    </Box>
  )
}

const RequestFundsModalFlow = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <Box>
      {step === 1 && <RequestFundsForm step={step} setStep={setStep} />}
      {step === 2 && <RequestFundsSummary step={step} setStep={setStep} />}
      {step === 3 && <TransactionPinForm step={step} setStep={setStep} />}
      {step === 4 && <PaymentConfirmation step={step} setStep={setStep} />}
      {step === 5 && <RequestFundSuccess />}
    </Box>
  );
};

export default RequestFundsModalFlow;
