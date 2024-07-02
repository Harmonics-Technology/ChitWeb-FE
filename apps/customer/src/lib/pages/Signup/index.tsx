import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SideImage from '~/lib/components/SideImage/SideImage'
import Form from './Form'


const index = () => {
  return (
    <Box 
        p='40px'
        w='100%'
        h='100%'
    >
        <Flex alignItems='center'>
            <Box w='50%'>
                <SideImage />
            </Box>
            <Box w='50%'>
                <Form />
            </Box>
        </Flex>
    </Box>
  )
}

export default index