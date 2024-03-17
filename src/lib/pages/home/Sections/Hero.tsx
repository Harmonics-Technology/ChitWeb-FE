import {
  Box,
  Image,
  Heading,
  Text,
  VStack,
  Flex,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

import { ChatIcon, HalfCircleIcon } from '~/lib/components/Icons';
import UnderlineText from '~/lib/components/UnderlineText';

const MockupIllustration = () => {
  return (
    <Box
      position="relative"
      bgImage="url('/assets/green-bg.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      w="100%"
      h="300px"
    >
      <Box position="absolute" bottom="40px" left="0" zIndex="1">
        <Image src="/assets/mockup-1.png" maxW="800px" />
      </Box>
      <Box position="absolute" right="-30px" bottom="80px" zIndex="1">
        <ChatIcon />
      </Box>

      <Box position="absolute" right="20px" zIndex="2" top="35%">
        <Flex alignItems="center" gap="15px">
          <Box as="a">
            <Image
              src="/assets/appstore.png"
              alt="download from appstore button"
              w="170px"
            />
          </Box>
          <Box as="a">
            <Image
              src="/assets/playstore.png"
              alt="download from appstore button"
              w="170px"
            />
          </Box>
        </Flex>
      </Box>

      <Box
        position="absolute"
        zIndex="2"
        maxW="400px"
        right="-20px"
        top="-140px"
      >
        <Text color="text.200" lineHeight="36px" fontSize={20}>
          Welcome to the future of finance! Designed to manage your money with
          ease.
        </Text>
      </Box>
    </Box>
  );
};

const Hero = () => {
  return (
    <Box
      maxW="1280px"
      mx="auto"
      bg="brand.100"
      borderRadius="24px"
      px="35px"
      py="39px"
    >
      <Stack>
        <Box mb="180px">
          <Heading
            color="text.200"
            textTransform="uppercase"
            textAlign="center"
            fontSize={60}
            lineHeight="95px"
            fontWeight={700}
          >
            Revolutionize your{' '}
            <Box as="span" color="brand.primary" textDecoration="underline">
              Payments
            </Box>{' '}
            with <br />
            our fintech platform
          </Heading>
        </Box>
        <MockupIllustration />
      </Stack>
    </Box>
  );
};

export default Hero;
