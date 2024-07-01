'use client'

import { Box, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import Cards from './components/Cards'
import RecurringPayments from './components/RecurringPayments'
import QuickActions from './components/QuickActions'



const index = () => {
  return (
    <Box>
      <Stack spacing='20px'>
        <Flex w="100%" alignItems="flex-start" gap="24px">
          <Box w="50%">
            <Cards />
          </Box>
          <Box w="50%">
            <RecurringPayments />
          </Box>
        </Flex>
        <QuickActions />
      </Stack>
    </Box>
  )
}

export default index