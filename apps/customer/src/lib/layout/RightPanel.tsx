import { Box, Stack, Image, Heading, Text, Flex, VStack, Button, Icon } from '@chakra-ui/react'
import React from 'react'
import { CopyIcon } from '../components/Icons'
import { ActionButton } from '../components/Button'
import { AddFundsIcon, ClaimChitIcon, GenerateChitIcon, PayVendorIcon, ReferralIcon, LogoutIcon, TransferFundsIcon, WithdrawIcon } from '../components/Icons'
import ScheduledTransactionItem from '~/lib/components/ScheduledTransaction/ScheduledTransactionItem'

const RightPanel = () => {
  return (
    <Box
      py='15px'
      w="25%"
      position="fixed"
      h='100%'
      zIndex="1"
      top="0"
      right="0"
      overflow="hidden"
      bg="text.500"
      px='15px'
    >
        <Box
            h="100%"
            overflow="hidden"
            bg="brand.100"
            py="20px"
            px='25px'
            w='100%'
            borderRadius='40px'
        >
          <Stack spacing='20px'>
            <Box>
              <VStack textAlign='center'>
                <Image src='/assets/images/avatar-placeholder.png' mb='5px' w='100px' h='100px' borderRadius='50%' border='3px solid' borderColor='brand.primary' boxShadow='md' />
                <Heading fontSize={18} fontWeight={600}>Munira Adamu-Ibrahim</Heading>
                <Flex alignItems='center'>
                  <Text fontWeight={500} fontSize={14} color='text.800'>Chit ID: <Box as='span' color='text.200' fontWeight={700}>Chit 10978 </Box></Text> <CopyIcon />
                </Flex>
              </VStack>
            </Box>
            <Box
              w="100%"
              border="2px solid"
              borderColor="brand.primary"
              py="10px"
              px="10px"
              boxShadow="4px 4px 0px 0px rgba(96, 63, 239, 1)"
              h='160px'
              bg='text.500'
            >
              <Flex
                alignItems="center"
                flexWrap="wrap"
                justifyContent="space-between"
                rowGap='15px'
              >
                <ActionButton
                  title="Add Funds"
                  bgColor="actions.100"
                  icon={AddFundsIcon}
                  onClick={() => { }}
                />
              <ActionButton
                title="Transfer Funds"
                bgColor="actions.400"
                icon={TransferFundsIcon}
                onClick={() => { }}
              />
                <ActionButton
                  title="Generate CHIT"
                  bgColor="actions.200"
                  icon={GenerateChitIcon}
                  onClick={() => {}}
                />
                <ActionButton
                  title="Claim CHIT"
                  bgColor="actions.300"
                  icon={ClaimChitIcon}
                  onClick={() => {}}
                />
               
                <ActionButton
                  title="Withdraw"
                  bgColor="actions.500"
                  icon={WithdrawIcon}
                  onClick={() => {}}
                />
              <ActionButton
                title="Pay Vendor"
                bgColor="#E5FCFF"
                icon={PayVendorIcon}
                onClick={() => {}}
              />
              </Flex>
            </Box>
            <Box
              w="100%"
              border="2px solid"
              borderColor="brand.primary"
              py="10px"
              px="10px"
              boxShadow="4px 4px 0px 0px rgba(96, 63, 239, 1)"
              h='160px'
              bg='text.500'
            >
              <Box mb="3">
                <Flex alignItems="center" justifyContent="space-between" mb="2">
                  <Heading fontSize={15} fontWeight={600} color="text.200">
                    Scheduled Payments
                  </Heading>
                  <Text fontSize={12} color="border.200">
                    View all
                  </Text>
                </Flex>
                <Box w="100%" mx="auto" h="1px" bg="border.100" />
              </Box>

              <Box textAlign="center">
                <Stack spacing="10px">
                  <ScheduledTransactionItem />
                  <ScheduledTransactionItem />
                </Stack>
              </Box>
            </Box>
            <Box>
                <Box>
                  <Button
                    border='none'
                    borderRadius='0'
                    padding='0'
                    bg='none'
                    margin='0'
                    _hover={{ bg: 'none' }}
                  >
                    <Flex alignItems='center' gap='12px' color='brand.primary'>
                      <Icon as={ReferralIcon} />
                      <Text>Referral</Text>
                    </Flex>
                  </Button>
                </Box>
                <Box>
                  <Button
                    border='none'
                    borderRadius='0'
                    padding='0'
                    bg='none'
                    margin='0'
                    _hover={{ bg: 'none' }}
                  >
                    <Flex alignItems='center' gap='12px' color='brand.primary'>
                      <Icon as={LogoutIcon} />
                      <Text fontSize={15} color='status.400'>Logout</Text>
                    </Flex>
                  </Button>
                </Box>
            </Box>
          </Stack>
        </Box>
    </Box>
  )
}

export default RightPanel