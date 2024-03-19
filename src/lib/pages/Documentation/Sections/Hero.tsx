'use client';

import { Box, VStack, Flex, Heading, Text } from '@chakra-ui/react';

import { ButtonComponent, IconButtonComponent } from '~/lib/components/Button';
import { ChevronIcon } from '~/lib/components/Icons';

const Hero = () => {
  return (
    <Box maxW="1440px" px="36px" mx="auto">
      <Box
        w="100%"
        h="500px"
        bg="brand.secondary"
        py="40px"
        borderRadius="24px"
      >
        <Flex w="100%" alignItems="center" justifyContent="center" h="100%">
          <VStack spacing="30px" maxW="800px" mx="auto">
            <Heading
              fontSize={64}
              fontWeight={900}
              color="text.200"
              textTransform="uppercase"
            >
              documentation
            </Heading>
            <Text textAlign="center" lineHeight="38px" fontSize={24}>
              Welcome to the future of finance! Our fintech platform is designed
              to simplify your financial life, providing you with innovative
              tools and cutting-edge technology to make payment with ease
            </Text>
            <Box>
              <Flex alignItems="center" gap="30px">
                <ButtonComponent
                  text="Try the Interactive Tutorial"
                  bg="brand.primary"
                  color="text.500"
                  width="249px"
                  onClick={() => {}}
                />
                <IconButtonComponent
                  text="Watch Live Video"
                  color="brand.primary"
                  bg="text.700"
                  icon={ChevronIcon}
                  width="211px"
                  flip
                />
              </Flex>
            </Box>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
