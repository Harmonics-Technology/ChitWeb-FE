import {
  Box,
  FormLabel,
  Heading,
  Text,
  Stack,
  Input,
  Flex,
  Image,
  PinInput,
  PinInputField,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { ButtonComponent } from '~/lib/components/Button';
import CustomModal from '~/lib/components/Modal';
import type { StepProps, OpenModalProps } from '~/lib/utilities/schema';

const PaymentSuccess = () => {
  return (
    <Box>
      <Box textAlign="center" mb="30px">
        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={32}>
          Payment Successful
        </Heading>
        <Text> You've successfully made a voucher payment to XBOX </Text>
      </Box>

      <ButtonComponent
        width="100%"
        color="text.500"
        bg="bg.200"
        text="Generate Receipt"
        onClick={() => {}}
      />
    </Box>
  );
};

const TransactionPinForm = ({ openModal }: OpenModalProps) => {
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
                  bg="text.500"
                  w="60px"
                  h="60px"
                  fontSize={25}
                  fontWeight={700}
                />
                <PinInputField
                  bg="text.500"
                  w="60px"
                  h="60px"
                  fontSize={25}
                  fontWeight={700}
                />
                <PinInputField
                  bg="text.500"
                  w="60px"
                  h="60px"
                  fontSize={25}
                  fontWeight={700}
                />
                <PinInputField
                  bg="text.500"
                  w="60px"
                  h="60px"
                  fontSize={25}
                  fontWeight={700}
                />
              </PinInput>
            </Flex>
            <ButtonComponent
              width="100%"
              color="text.500"
              text="Proceed"
              onClick={openModal}
              bg="bg.200"
            />
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
};

const PayWithRefIdSummary = ({ step, setStep }: StepProps) => {
  const lists = [1, 2, 3, 4, 5];
  return (
    <Box>
      <Stack spacing="32px">
        <Box>
          <Heading fontSize={24} fontWeight={700}>
            Payment Summary
          </Heading>
        </Box>
        <Box>
          <Stack spacing="20px">
            {lists.map((list, index) => {
              return (
                <Box>
                  <Flex alignItems="flex-start" justifyContent="space-between">
                    <Box>
                      <Flex alignItems="center" gap="5px">
                        <Image
                          w="50px"
                          h="50px"
                          objectFit="cover"
                          src="/assets/blueberries.png"
                        />
                        <Box>
                          <Heading fontSize={15} mb="3px">
                            Black currant label drink
                          </Heading>
                          <Text fontSize={13} color="border.200">
                            Qty: 3 packs
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Heading fontSize={15} fontWeight={600}>
                      ₦10,000
                    </Heading>
                  </Flex>
                </Box>
              );
            })}
          </Stack>
        </Box>
        <Box>
          <Flex mb="10px" justifyContent="space-between">
            <Text fontSize={15} color="text.400">
              Subtotal
            </Text>
            <Heading fontSize={15} fontWeight={600}>
              ₦60,000
            </Heading>
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontSize={15} color="text.400">
              Charges
            </Text>
            <Heading fontSize={15} fontWeight={600}>
              ₦100
            </Heading>
          </Flex>
        </Box>
        <Box>
          <Flex justifyContent="space-between">
            <Heading fontSize={18} fontWeight={700}>
              Total
            </Heading>
            <Heading fontSize={16} fontWeight={700}>
              ₦60,100
            </Heading>
          </Flex>
        </Box>
        <ButtonComponent
          bg="bg.200"
          text="Proceed"
          color="text.500"
          onClick={() => setStep(step + 1)}
          width="100%"
        />
      </Stack>
    </Box>
  );
};

const PayWithRefIdForm = () => {
  return (
    <Box>
      <Stack spacing="32px">
        <Box>
          <Heading mb="8px" fontSize={24} fontWeight={700}>
            Pay with Reference ID
          </Heading>
          <Text color="text.400">Make payment to vendor using referral ID</Text>
        </Box>
        <Box>
          <FormLabel m="0" fontSize={14}>
            Reference ID
          </FormLabel>
          <Input
            type="text"
            _placeholder={{ fontSize: 14, color: 'text.800' }}
            bg="text.500"
            w="100%"
            outline="none"
            placeholder="Enter ID generated from Vendor's site"
          />
        </Box>
        <ButtonComponent
          bg="brand.primary"
          text="Proceed"
          color="text.500"
          onClick={() => {}}
          width="100%"
        />
      </Stack>
    </Box>
  );
};

const PayWithRefIdFlow = () => {
  const [step, setStep] = useState<number>(0);
  const [openPaymentSuccessModal, setOpenPaymentSuccessModal] = useState<boolean>(false);
  return (
    <Box>
      <PayWithRefIdForm />
      {/* {step === 0 && <PayWithRefIdForm step={step} setStep={setStep} />}
      {step === 1 && <PayWithRefIdSummary step={step} setStep={setStep} />}
      {step === 2 && (
        <TransactionPinForm
          openModal={() => setOpenPaymentSuccessModal(true)}
        />
      )}
      <CustomModal
        isOpen={openPaymentSuccessModal}
        onClose={() => setOpenPaymentSuccessModal(false)}
      >
        <PaymentSuccess />
      </CustomModal> */}
    </Box>
  );
};

export default PayWithRefIdFlow;
