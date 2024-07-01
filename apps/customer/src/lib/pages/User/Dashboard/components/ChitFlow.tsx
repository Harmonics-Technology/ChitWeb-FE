import { Box, Heading, Flex, Text, Input } from '@chakra-ui/react'
import React from 'react'


const ChitFlow = () => {
  const transactionHistory = []
  return (
    <Box 
        w='100%' 
        h='100%' 
        border='2px solid' 
        borderColor='brand.100' 
        borderRadius='40px'
        p='25px'
    >
        <Box>
            <Flex alignItems='center' justifyContent='space-between'>
                <Heading fontWeight={600} fontSize={18}>Chit Flow</Heading>
                <Input type='date' w='150px' />
            </Flex>
        </Box>

        <Box
            w='100%'
            h='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Heading fontSize={20} fontWeight={400} color='text.800'>No Transaction yet</Heading>
        </Box>
    </Box>
  )
}

export default ChitFlow