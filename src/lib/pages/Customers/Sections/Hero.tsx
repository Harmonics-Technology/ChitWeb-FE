'use client';

import { Box, Image, Flex, Heading, Text } from '@chakra-ui/react';

import { ButtonComponent, IconButtonComponent } from '~/lib/components/Button';
import { ChevronIcon } from '~/lib/components/Icons';

const HeroImage = () => {
  return (
    <Box w="100%" h="auto" position="relative">
      <Image src="/assets/main-image.png" w="100%" h="100%" objectFit="cover" />
      <Image
        src="/assets/left-image.png"
        position="absolute"
        top="30px"
        left="-45%"
      />
      <Image
        src="/assets/bottom-image.png"
        position="absolute"
        bottom="-17%"
        left="15%"
      />
    </Box>
  );
};

const Hero = () => {
  return (
    <Box maxW="1440px" mx="auto" px="36px">
      <Box
        w="100%"
        bg="brand.secondary"
        borderRadius="24px"
        pt="48px"
        pb="122px"
        px="38px"
      >
        <Flex alignItems="flex-start" justifyContent="space-between">
          <Box maxW="765px" mt="5">
            <Box mb="25px">
              <Heading
                color="text.200"
                textTransform="uppercase"
                fontSize={60}
                lineHeight="100px"
                fontWeight={900}
              >
                managing your <br />{' '}
                <Box as="span" color="brand.primary" textDecoration="underline">
                  finances
                </Box>{' '}
                made easier <br />
                with our services
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
                />
              </Flex>
            </Box>
          </Box>
          <Box maxW="500px">
            <HeroImage />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
