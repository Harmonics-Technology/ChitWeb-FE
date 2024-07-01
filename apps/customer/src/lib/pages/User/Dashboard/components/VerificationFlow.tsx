import { Box } from '@chakra-ui/react'
import React from 'react'
import VerificationCarousel from './VerificationCarousel'



const VerificationFlow = () => {
  return (
    <Box
        w='100%' h='55%' border='2px solid' borderColor='brand.100' borderRadius='40px'
        p='25px'
    >
        <VerificationCarousel />
    </Box>
  )
}

export default VerificationFlow