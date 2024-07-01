import { Box, Heading, Text, Stack, Flex, PinInput, PinInputField, VStack, Image } from "@chakra-ui/react";
import CustomModal from "../Modal";
import {useState} from 'react'
import { DeleteAccountModalProps, StepProps } from "~/lib/utilities/schema";
import { ButtonComponent } from "../Button";



const DeleteAccountConfirmationPin = ({step, setStep}: StepProps) => {
    const [otp, setOtp] = useState<string>('');
    return (
        <Box>
            <Stack spacing="30px">
                <Image src="/assets/images/danger-img.png" display="block" mx="auto" />
                <Box>
                    <Heading color="text.200" mb='15px' textAlign='center' fontWeight={700} fontSize={25}>
                        Delete Account
                    </Heading>
                    <Text fontSize={18} textAlign='center'>Enter your transaction pin to delete your account</Text>
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
                        <Box>
                            <Flex alignItems='center' justifyContent='center' gap='30px'>
                                <ButtonComponent
                                    text='Cancel'
                                    color='text.200'
                                    bg='status.700'
                                    onClick={() => { }}
                                    width="160px"
                                />
                                <ButtonComponent
                                    text='Proceed'
                                    color='text.500'
                                    bg='status.100'
                                    onClick={() => setStep(step + 1)}
                                    width="175px"
                                />
                            </Flex>
                        </Box>
                    </VStack>
                </Box>
            </Stack>
        </Box>
    );
}


const DeleteAccountConfirmation = ({step, setStep}: StepProps) => {
    return (
        <Box>
            <Stack>
                <Image src="/assets/images/danger-img.png" display="block" mx="auto" mb='3' />
                <Box mb='30px' textAlign='center'>
                    <Heading mb='30px' fontSize={25}>Delete Account</Heading>
                    <Text fontSize={18}>You are about to delete your account, this action is irreversible</Text>
                </Box>
                <Box>
                    <Flex alignItems='center' justifyContent='center' gap='30px'>
                        <ButtonComponent
                            text='Cancel'
                            color='text.200'
                            bg='status.700'
                            onClick={() => { }}
                            width="160px"
                        />
                        <ButtonComponent
                            text='Proceed'
                            color='text.500'
                            bg='status.100'
                            onClick={() => setStep(step + 1)}
                            width="175px"
                        />
                    </Flex>
                </Box>
            </Stack>
        </Box>
    )
}


const DeleteAccountFlow = () => {
    const [step, setStep] = useState<number>(1);
    return (
        <Box as='section'>
            {step === 1 && <DeleteAccountConfirmation step={step} setStep={setStep} />}
            {step === 2 && <DeleteAccountConfirmationPin step={step} setStep={setStep} />}
        </Box>
    )
}


const index = ({isOpen, closeModal}: DeleteAccountModalProps) => {
  return (
    <Box>
        <CustomModal
            isOpen={isOpen}
            onClose={closeModal}
        >
            <DeleteAccountFlow />
        </CustomModal>
    </Box>
  )
}

export default index