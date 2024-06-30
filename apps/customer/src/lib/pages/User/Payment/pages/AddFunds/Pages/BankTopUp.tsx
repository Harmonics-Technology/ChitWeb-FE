'use client';

import {
  Box,
  FormControl,
  Heading,
  Text,
  FormLabel,
  Select,
  Stack,
  Input, VStack, PinInput, PinInputField, Flex
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { ButtonComponent } from '~/lib/components/Button';
import CustomModal from '~/lib/components/Modal';
import { CloseModalProps } from '~/lib/utilities/schema';

const TransactionPinForm = () => {
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
              onClick={() => {}}
              bg="brand.primary"
            />
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
};

const BankTopUp = () => {
  const [showTopUpFlowModal, setShowTopUpFlowModal] = useState<boolean>(false);
  return (
    <Box>
      <Stack spacing="32px">
        <Box>
          <Heading mb="8px" fontSize={24} fontWeight={600} color="text.200">
            Top up Wallet
          </Heading>
          <Text fontSize={14} color="text.400">
            Fund wallet via transfer from your local banks
          </Text>
        </Box>
        <Box>
          <FormControl>
            <Stack spacing="20px">
              {/* <Box>
                <FormLabel fontSize={14}>Select Bank</FormLabel>
                <Select bg="text.500" borderColor="border.100">
                  <option value="Kuda Bank">Kuda Bank</option>
                  <option value="Kuda Bank">Kuda Bank</option>
                  <option value="Kuda Bank">Kuda Bank</option>
                  <option value="Kuda Bank">Kuda Bank</option>
                  <option value="Kuda Bank">Kuda Bank</option>
                </Select>
              </Box>
              <Box>
                <FormLabel fontSize={14}>Account Number</FormLabel>
                <Input
                  type="number"
                  placeholder="Account Number"
                  bg="white"
                  w="100%"
                  mb="1"
                />
                <Text fontSize={14} color="border.200">
                  Ogunjimi Peace
                </Text>
              </Box> */}
              <Box>
                <FormLabel fontSize={14}>Amount</FormLabel>
                <Input
                  type="number"
                  w="100%"
                  bg="text.500"
                  placeholder="Amount"
                />
              </Box>
            </Stack>
          </FormControl>
        </Box>
        <ButtonComponent
          text="Proceed"
          color="text.500"
          bg="brand.primary"
          width="125px"
          onClick={() => setShowTopUpFlowModal(true)}
        />
      </Stack>
      <CustomModal
        isOpen={showTopUpFlowModal}
        onClose={() => setShowTopUpFlowModal(false)}
      >
        <TransactionPinForm />
      </CustomModal>
    </Box>
  );
};

export default BankTopUp;
