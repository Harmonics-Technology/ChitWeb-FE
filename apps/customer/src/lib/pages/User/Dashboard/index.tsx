import { Box, Stack, Flex } from '@chakra-ui/react'
import React from 'react'
import ChitFlow from './components/ChitFlow'
import Requests from './components/Requests'
import TransactionHistory from './components/TransactionHistory'
import VerificationFlow from './components/VerificationFlow'



const index = () => {
  return (
    <Box as='section' w='100%' h='100vh'>
      <Stack w='100%' h='100%' spacing='30px'>
        <Box w='100%' h='50%'>
          <Flex w='100%' h='100%' gap='30px'>
            <Box w='55%'>
              <ChitFlow />
            </Box>
            <Stack w='45%' h='100%' spacing='15px'>
              <VerificationFlow />
              <Requests />
            </Stack>
          </Flex>
        </Box>
        <Box w='100%' h='50%'>
          <TransactionHistory />
        </Box>
      </Stack>
    </Box>
  )
}

export default index