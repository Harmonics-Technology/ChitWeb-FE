import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Flex
      as="header"
      mx={20}
      mt={10}
      align="center"
      background="brand.primary"
      h="95px"
      borderRadius="24px"
      justifyContent="space-between"
      p="20px"
    >
      <Box>
        <Image
          src="https://ucarecdn.com/7c5701a6-45eb-4676-8d21-8dcda5c0c5c7/ChitLogo.png"
          alt="Chit Logo"
        />
      </Box>
      <Flex justifyContent="space-between">
        <Text color="white" fontSize="xl" px="5">
          Customer
        </Text>
        <Text color="white" fontSize="xl" px="5">
          Merchant
        </Text>
        <Text color="white" fontSize="xl" px="5">
          Documentation
        </Text>
      </Flex>

      <Flex justifyContent="space-between">
        <Text color="white" fontSize="xl" px="5">
          Login
        </Text>
        <Button variant="outline" color="white" size="lg">
          Sign Up
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
