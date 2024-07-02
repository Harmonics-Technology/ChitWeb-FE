import { Box, Image, Text, Heading, Stack, Flex } from '@chakra-ui/react'
import React from 'react'


const SideImage = () => {
  return (
    <Box 
        w='100%'
        minH='500px'
        borderRadius='40px'
        bgGradient='linear(to-br, #6844FF, #2A1A6E)'
        px='65px'
        pt='60px'
    >
        <Stack spacing='80px'>
            <Box>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Box w='340px'>
                        <Stack spacing='15px' color='white.100'>
                            <Heading fontSize={21} fontWeight={600} color='text.500'>Must-have for everyone 👍🏽</Heading>
                            <Text color='white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</Text>
                            <Image src='/assets/images/rating.png' w='210px' />
                        </Stack>
                    </Box>
                    <Box w='100px'>
                        <Image src='/assets/images/flower.png' w='100%' />
                    </Box>
                </Flex>
            </Box>
            <Box maxW='400px' mx='auto'>
                <Image src='/assets/images/iphone-mockup.png' w='100%' objectFit='contain' />
            </Box>
        </Stack>
    </Box>
  )
}

export default SideImage