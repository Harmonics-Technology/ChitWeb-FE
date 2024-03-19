import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Box
      as="header"
      maxW="1440px"
      mx="auto"
      px="36px"
      my="35px"
      position="sticky"
      zIndex="99"
      top="20px"
    >
      <Flex
        align="center"
        background="brand.primary"
        h="95px"
        borderRadius="24px"
        justifyContent="space-between"
        p="20px"
      >
        <Box>
          <Link href="/">
            <Image
              src="https://ucarecdn.com/7c5701a6-45eb-4676-8d21-8dcda5c0c5c7/ChitLogo.png"
              alt="Chit Logo"
            />
          </Link>
        </Box>
        <Flex justifyContent="space-between">
          <Link href="/customers">
            <Text color="white" fontSize="xl" px="5">
              Customer
            </Text>
          </Link>
          <Link href="/merchant">
            <Text color="white" fontSize="xl" px="5">
              Merchant
            </Text>
          </Link>
          <Link href="/documentation">
            <Text color="white" fontSize="xl" px="5">
              Documentation
            </Text>
          </Link>
        </Flex>

        <Flex justifyContent="space-between" alignItems="center">
          <Text color="white" fontSize="xl" px="5">
            Login
          </Text>
          <Button variant="outline" color="white" size="lg">
            Sign Up
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
