import { Box, Heading } from '@chakra-ui/react'
import React from 'react'


const Requests = () => {
  return (
    <Box
        w='100%' h='45%' border='2px solid' borderColor='brand.100' borderRadius='40px'
        p='25px'
    >
      <Box><Heading fontSize={18} fontWeight={600}>Requests</Heading></Box>
        <Box
          w='100%'
          h='100%'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Heading fontSize={20} fontWeight={400} color='text.800'>No Requests Yet</Heading>
        </Box>
    </Box>
  )
}

export default Requests