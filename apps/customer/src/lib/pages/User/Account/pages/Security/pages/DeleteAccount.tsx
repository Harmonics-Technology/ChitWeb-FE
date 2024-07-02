import {
  Box,
  useDisclosure,
  Modal,
  Image,
  Heading,
  Text,
  VStack,
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  PinInput,
  PinInputField,
  Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import {
  ButtonComponent,
  OutlineButtonComponent,
} from '~/lib/components/Button';
import CustomModal from '~/lib/components/Modal';
import type { StepProps } from '~/lib/utilities/schema';

const ConsfirmationPin = () => {
  const [otp, setOtp] = useState<string>('');
  return (
    <Box>
      <Stack spacing="30px">
        <Image src="/assets/danger-img.png" display="block" mx="auto" />
        <Heading fontSize={32} textAlign="center" color="text.200">
          Are you sure?
        </Heading>
        <Text textAlign="center" color="text.400" fontSize={18}>
          Enter your transaction pin to delete your account
        </Text>
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
                  text="Delete"
                  onClick={() => {}}
                  bg="status.400"
                />
              </Flex>
            </Box>
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
};

const DeleteAccountConfirmation = ({ step, setStep }: StepProps) => {
  return (
    <Box>
      <VStack spacing="30px">
        <Image src="/assets/danger-img.png" display="block" mx="auto" />
        <Heading fontSize={32} textAlign="center" color="text.200">
          Are you sure?
        </Heading>
        <Text textAlign="center" color="text.400" fontSize={18}>
          You are about to delete your account, this action is irreversible
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
              text="Delete"
              onClick={() => setStep(step + 1)}
              bg="status.400"
            />
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

const DeleteAccountFlow = () => {
  const [step, setStep] = useState(0);
  return (
    <Box>
      {step === 0 && (
        <DeleteAccountConfirmation step={step} setStep={setStep} />
      )}
      {step === 1 && <ConsfirmationPin />}
    </Box>
  );
};

const DeleteAccount = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="30px">
        <ModalCloseButton />
        <ModalBody>
          <DeleteAccountFlow />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DeleteAccount;
