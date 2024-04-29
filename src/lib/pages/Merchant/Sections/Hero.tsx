'use client';

import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

import { ButtonComponent, IconButtonComponent } from '~/lib/components/Button';
import { ChevronIcon } from '~/lib/components/Icons';

const Hero = () => {
  return (
    <Box maxW="1440px" mx="auto" px="36px">
      <Box
        w="100%"
        bg="brand.secondary"
        borderRadius="24px"
        py="48px"
        px="38px"
      >
        <Flex alignItems="center" gap="50px">
          <Box maxW="765px">
            <Box mb="25px">
              <Heading
                color="text.200"
                textTransform="uppercase"
                fontSize={64}
                lineHeight="100px"
                fontWeight={900}
              >
                expand your e- <br /> commerce{' '}
                <Box as="span" color="brand.primary" textDecoration="underline">
                  {' '}
                  business{' '}
                </Box>{' '}
              </Heading>
            </Box>

            <Box mb="38px">
              <Text fontSize={22} lineHeight="38px" color="text.600">
                Welcome to the future of finance! Our fintech platform is
                designed to simplify your financial life, providing you with
                innovative tools and cutting-edge technology to make payment
                with ease
              </Text>
            </Box>
            <Box>
              <Flex alignItems="center" gap="24px">
                <ButtonComponent
                  text="Open Your CHIT Account"
                  bg="brand.primary"
                  color="text.500"
                  width="241px"
                  onClick={() => {}}
                />
                <IconButtonComponent
                  text="Learn More"
                  color="brand.primary"
                  bg="text.700"
                  icon={ChevronIcon}
                  width="168px"
                  flip
                  onClick={() => {}}
                />
              </Flex>
            </Box>
          </Box>

          <Box maxW="492px">
            <Image src="/assets/mockup-6.png" w="100%" objectFit="cover" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
