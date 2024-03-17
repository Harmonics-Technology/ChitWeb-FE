import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Box
      as="header"
      maxW="1440px"
      position="sticky"
      top="0"
      mx="auto"
      px="36px"
      my="35px"
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
          <Text color="white" fontSize="xl" px="5">
            Merchant
          </Text>
          <Text color="white" fontSize="xl" px="5">
            Documentation
          </Text>
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
