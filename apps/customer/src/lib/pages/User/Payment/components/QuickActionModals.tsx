import { Box, FormLabel, Heading, Stack, Select, InputGroup, Text, Input, InputRightElement, PinInput, PinInputField, VStack, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FormInput } from 'shared-ui'
import { ButtonComponent } from '~/lib/components/Button'
import { UserIcon } from '~/lib/components/Icons'
import { IndexProps, StepProps } from '~/lib/utilities/schema'



const WithdrawFundsModal = () => {
    const [amount,setAmount] = useState<string>('')
    return (
        <Box>
            <Stack spacing='30px'>
                <Heading fontSize={25}>Withdraw</Heading>
                <Stack spacing='20px'>
                    <Box>
                        <FormLabel>
                            Amount
                        </FormLabel>
                        <FormInput
                            value={amount}
                            setValue={setAmount}
                            width='100%'
                            type='text'
                            placeholder='Enter amount to withdraw'
                        />
                    </Box>
                    <Box>
                        <FormLabel>
                            Bank
                        </FormLabel>
                        <Select placeholder='Select Bank'>
                            <option value="Kuda Bank">Kuda Bank</option>
                            <option value="Kuda Bank">Kuda Bank</option>
                            <option value="Kuda Bank">Kuda Bank</option>
                            <option value="Kuda Bank">Kuda Bank</option>
                        </Select>
                    </Box>
                    <Box>
                        <FormLabel>
                            Account Number
                        </FormLabel>
                        <FormInput
                            value={amount}
                            setValue={setAmount}
                            width='100%'
                            type='text'
                            placeholder='Enter reference code'
                        />
                    </Box>
                </Stack>
                <ButtonComponent
                    text='Proceed'
                    bg='brand.primary'
                    onClick={() => { }}
                    color='text.500'
                    width='100%'
                />
            </Stack>
        </Box>
    )
}


const TransferFundsModal = () => {
    const [amount, setAmount] = useState<string>('')
    return (
        <Box>
            <Stack spacing='30px'>
                <Heading fontSize={25}>Transfer</Heading>
                <Stack spacing='15px'>
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
                        <FormLabel>
                            Amount
                        </FormLabel>
                        <FormInput
                            value={amount}
                            setValue={setAmount}
                            width='100%'
                            type='text'
                            placeholder='Enter amount'
                        />
                    </Box>
                    <Box>
                        <FormLabel>
                            Description
                        </FormLabel>
                        <FormInput
                            value={amount}
                            setValue={setAmount}
                            width='100%'
                            type='text'
                            placeholder='Enter descrption'
                        />
                    </Box>
                </Stack>
                <ButtonComponent
                    text='Proceed'
                    bg='brand.primary'
                    onClick={() => { }}
                    color='text.500'
                    width='100%'
                />
            </Stack>
        </Box>
    )
}


const ClaimChitModal = () => {
    const [referenceCode, setReferenceCode] = useState<string>('')
    return (
        <Box>
            <Stack spacing='40px'>
                <Heading fontSize={25}>Claim CHIT</Heading>
                <Box>
                    <FormLabel>
                        Reference Code
                    </FormLabel>
                    <FormInput 
                        value={referenceCode}
                        setValue={setReferenceCode}
                        width='100%'
                        type='text'
                        placeholder='Enter reference code'
                    />
                </Box>
                <ButtonComponent 
                    text='Claim CHIT'
                    bg='brand.primary'
                    onClick={() => {}}
                    color='text.500'
                    width='100%'
                />
            </Stack>
        </Box>
    )
}


const ReferenceCodeModal = () => {
    return (
        <Box>
            <Stack spacing='40px'>
                <Box textAlign='center'>
                    <Heading mb='12px' fontWeight={500} fontSize={25}>Reference Code</Heading>
                    <Text>Share this code with your recipient so they can claim their CHIT</Text>
                </Box>
                <Box bg='brand.100' w='280px' mx='auto'>
                    <Text color='brand.primary' textAlign='center' py='16px' px='32px' fontSize={25} fontWeight={600}>2WRGKLNLHI00</Text>
                </Box>
            </Stack>
        </Box>
    )
}

const TransactionPinForm = ({ step, setStep }: StepProps) => {
    const [otp, setOtp] = useState<string>('');
    return (
        <Box>
            <Stack spacing="30px">
                <Box>
                    <Heading color="text.200" textAlign='center' fontWeight={700} fontSize={25}>
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


const GenerateChitSummary = ({ step, setStep }: StepProps) => {
    const [amount, setAmount] = useState<string>('')
    return (
        <Box>
            <Stack spacing='30px'>
                <Heading fontSize={25}>Generate CHIT</Heading>
                <Box>
                    <Stack spacing='15px'>
                        <Box>
                            <FormLabel>
                                Amount
                            </FormLabel>
                            <FormInput
                                value='N50,000'
                                setValue={setAmount}
                                width='100%'
                                type='text'
                                placeholder='Enter amount'
                            />
                        </Box>
                        <Box>
                            <FormLabel>
                                Charge
                            </FormLabel>
                            <FormInput
                                value='N50'
                                setValue={setAmount}
                                width='100%'
                                type='text'
                                placeholder='Enter amount'
                            />
                        </Box>
                    </Stack>
                </Box>
                <ButtonComponent
                    text='Proceed'
                    bg='brand.primary'
                    onClick={() => setStep(step + 1)}
                    color='text.500'
                    width='100%'
                />
            </Stack>
        </Box>
    )
}


const GenerateChitForm = ({step, setStep}: StepProps) => {
    const [amount, setAmount] = useState<string>('')
    return (
        <Box>
            <Stack spacing='30px'>
                <Heading fontSize={25}>Generate CHIT</Heading>
                <Box>
                    <FormLabel>
                        Amount
                    </FormLabel>
                    <FormInput
                        value={amount}
                        setValue={setAmount}
                        width='100%'
                        type='text'
                        placeholder='Enter amount'
                    />
                </Box>
                <ButtonComponent
                    text='Proceed'
                    bg='brand.primary'
                    onClick={() => setStep(step + 1)}
                    color='text.500'
                    width='100%'
                />
            </Stack>
        </Box>
    )
}



const GenerateChitFlow = () => {
    const [step, setStep] = useState<number>(1)
    return (
        <Box>
            {step === 1 && <GenerateChitForm step={step} setStep={setStep} />}
            {step === 2 && <GenerateChitSummary step={step}  setStep={setStep} />}
            {step === 3 && <TransactionPinForm step={step} setStep={setStep} />}
            {step === 4 && <ReferenceCodeModal />}
        </Box>
    )
}


const QuickActionModals = ({index}: IndexProps) => {
  return (
    <Box>
        {index === 1 && <GenerateChitFlow />}
        {index === 2 && <ClaimChitModal />}
        {index === 3 && <TransferFundsModal />}
        {index === 4 && <WithdrawFundsModal />}
    </Box>
  )
}

export default QuickActionModals