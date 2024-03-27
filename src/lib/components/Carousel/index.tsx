import { Box, Image, Flex, VStack, Text, Heading } from '@chakra-ui/react';

import type { CarouselProps } from '~/lib/utilities/schema';

const Carousel = ({ image, title, description }: CarouselProps) => {
  return (
    <Box
      maxW="580px"
      h="680px"
      bgGradient="linear(to-br, bg.100 20%, bg.200 80%)"
      borderRadius="40px"
      px="50px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing="30px" alignItems="center" justifyContent="center">
        <Box maxW="300px" h="300px">
          <Image
            src={image}
            alt="3d-icon"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <Box textAlign="center" color="text.500">
          <Heading fontSize={40} fontWeight={600} mb="15px">
            {title}
          </Heading>
          <Text fontSize={19} lineHeight="38px">
            {description}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Carousel;
