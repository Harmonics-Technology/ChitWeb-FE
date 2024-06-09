'use client';

import {
  Box,
  VStack,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
} from '@chakra-ui/react';

import { ButtonComponent } from '~/lib/components/Button';
import { ChevronIcon } from '~/lib/components/Icons';

const Hero = () => {
  return (
    <Box maxW="1440px" px="36px" mx="auto">
      <Box
        w="100%"
        h="357px"
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
            <Box>
              <Flex alignItems="center" gap="30px">
                <ButtonComponent
                  text="Try the Interactive Tutorial"
                  bg="brand.primary"
                  color="text.500"
                  width="249px"
                  onClick={() => {}}
                />
                <Button
                  bg="text.700"
                  color="brand.primary"
                  py="23px"
                  px="18px"
                  borderRadius="12px"
                  fontWeight={600}
                  _hover={{ bg: 'none' }}
                  width="168px"
                  onClick={() => {}}
                >
                  <Flex alignItems="center" gap={2} flexDir="row-reverse">
                    <Icon as={ChevronIcon} fontSize={20} />
                    <Text>Watch Live Video</Text>
                  </Flex>
                </Button>
              </Flex>
            </Box>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
