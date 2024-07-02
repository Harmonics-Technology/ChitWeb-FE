import { Box, Stack, Flex, Text, Heading,FormLabel} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FormInput } from 'shared-ui'
import { ButtonComponent, OutlineButtonComponent } from '~/lib/components/Button'
import { StepProps, RequestFundsStatusProps} from '~/lib/utilities/schema'





const RequestFundStatus = ({status}: RequestFundsStatusProps) => {
    return (
        <Box>
            <Box textAlign="center" mb="30px">
                {status === 'success' ? 
                 <Box>
                        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={25}>
                            Acceptance Successful
                        </Heading>
                        <Text>
                            Success! You’ve successfully accepted the request from CHIT user A
                        </Text>
                 </Box> 
                 : 
                 <Box>
                        <Heading mb="16px" color="text.200" fontWeight={700} fontSize={25}>
                            Decline Successful
                        </Heading>
                        <Text>
                            Success! You’ve successfully declined the request from CHIT user A
                        </Text>
                 </Box>   
                }
            </Box>
            <ButtonComponent
                width="100%"
                color="text.500"
                text="Done"
                onClick={() => { }}
                bg="brand.primary"
                // icon={HomeIcon}
                // flip
            />
        </Box>
    );
};


const DeclineRequestOption = ({step, setStep}: StepProps) => {
    const [declineReason, setDeclineReason] = useState<string>('')
    return (
        <Box>
            <Box mb="30px">
                <Heading mb="16px" color="text.200" fontWeight={700} fontSize={25}>
                    Requst Summary
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
                                    Chit ID
                                </Text>
                                <Text fontWeight={600} color="text.200">
                                    Chit10978
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
                                    Date
                                </Text>
                                <Text fontWeight={600} color="text.200">
                                    01 April 2023
                                </Text>
                            </Flex>
                        </Box>
                        <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2" mb='3'>
                            <Flex alignItems="center" justifyContent="space-between">
                                <Text fontWeight={500} color="border.200">
                                    Time
                                </Text>
                                <Text fontWeight={600} color="text.200">
                                    10:50 AM
                                </Text>
                            </Flex>
                        </Box>
                        <Box mb='3'>
                            <FormLabel>Reason for Decline (Optional)</FormLabel>
                            <FormInput 
                                type='text'
                                value={declineReason}
                                setValue={setDeclineReason}
                                placeholder='State the reason for decline'
                                width='100%'
                            />
                        </Box>
                       <ButtonComponent 
                            text='Decline Request'
                            width='100%'
                            bg='brand.primary'
                            color='text.500'
                            onClick={() => setStep(step + 1)}
                       />
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}


const RequestSummaryOption = ({step, setStep}: StepProps) => {
    return (
        <Box>
            <Box mb="30px">
                <Heading mb="16px" color="text.200" fontWeight={700} fontSize={25}>
                    Requst Summary
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
                                    Chit ID
                                </Text>
                                <Text fontWeight={600} color="text.200">
                                    Chit10978
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
                                    Date
                                </Text>
                                <Text fontWeight={600} color="text.200">
                                    01 April 2023
                                </Text>
                            </Flex>
                        </Box>
                        <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
                            <Flex alignItems="center" justifyContent="space-between">
                                <Text fontWeight={500} color="border.200">
                                    Time
                                </Text>
                                <Text fontWeight={600} color="text.200">
                                    10:50 AM
                                </Text>
                            </Flex>
                        </Box>
                        <Stack spacing='16px'>
                            <ButtonComponent 
                                text='Accept Request'
                                width='100%'
                                bg='brand.primary'
                                color='text.500'
                                onClick={() => setStep(step + 1)}
                            />
                            <OutlineButtonComponent
                                text='Decline Request'
                                width='100%'
                                color='brand.primary'
                                onClick={() => { }}
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}


const AcceptRequestModalFlow = () => {
  const [step, setStep] = useState<number>(1)
  return (
    <Box>
        {step === 1 && <RequestSummaryOption step={step} setStep={setStep} />}
        {step === 2 && <RequestFundStatus status='success' />}
    </Box>
  )
}

export default AcceptRequestModalFlow



export const RequestDetails = () => {
    return (
        <Box>
            <Box mb="30px">
                <Heading mb="16px" color="text.200" fontWeight={700} fontSize={25}>
                    Requst Summary
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
                                    Chit ID
                                </Text>
                                <Text fontWeight={600} color="text.200">
                                    Chit10978
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
                                    Date
                                </Text>
                                <Text fontWeight={600} color="text.200">
                                    01 April 2023
                                </Text>
                            </Flex>
                        </Box>
                        <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
                            <Flex alignItems="center" justifyContent="space-between">
                                <Text fontWeight={500} color="border.200">
                                    Time
                                </Text>
                                <Text fontWeight={600} color="text.200">
                                    10:50 AM
                                </Text>
                            </Flex>
                        </Box>
                        <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
                            <Flex alignItems="center" justifyContent="space-between">
                                <Text fontWeight={500} color="border.200">
                                    Status
                                </Text>
                                <Text fontWeight={600} color='status.500'>
                                    Success
                                </Text>
                            </Flex>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}


export const DeclineRequestModalFlow = () => {
    const [step, setStep] = useState<number>(1)
    return (
        <Box>
            {step === 1 && <DeclineRequestOption step={step} setStep={setStep} />}
            {step === 2 && <RequestFundStatus status='failed' />}
        </Box>
    )
}


