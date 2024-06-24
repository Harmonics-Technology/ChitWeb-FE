'use client'

import { Box, Heading, Select, Flex, Button } from '@chakra-ui/react'
import React, {useState} from 'react'


const TransactionHistory = () => {
  const filterOptions = [ 'Today', '7 days ago' ];
  const [activeBtn, setActiveBtn] = useState(0);
  return (
    <Box
        w='100%' 
        h='100%' 
        border='2px solid' 
        borderColor='brand.100' 
        borderRadius='40px'
        p='25px'
    >
      <Flex alignItems='center' justifyContent='space-between'>
        <Heading fontSize={18} fontWeight={600}>Chit Tracker</Heading>
        <Box>
          <Flex alignItems='center' gap='24px'>
            {filterOptions.map((option, index) => <Button onClick={() => setActiveBtn(index)} py='14px' px='30px' color={index === activeBtn ? 'white' : 'text.200'} fontSize={12} border="2px solid" borderColor='brand.100' key={index} bg={index === activeBtn ? 'brand.primary' : 'none'}>{option}</Button>)}
          </Flex>
        </Box>
      </Flex>
      <Box
        w='100%'
        h='100%'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Heading fontSize={22} fontWeight={400} color='text.800'>No Transactions Yet</Heading>
      </Box>
    </Box>
  )
}

export default TransactionHistory