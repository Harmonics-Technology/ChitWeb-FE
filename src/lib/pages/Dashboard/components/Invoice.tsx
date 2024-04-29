import { Box, Heading, Flex, Text } from '@chakra-ui/react';

const ChitFlow = () => {
  return (
    <Box
      w="50%"
      borderRadius="8px"
      p="5"
      bg="text.500"
      boxShadow="lg"
      minH="200px"
    >
      <Box mb="14">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading fontSize={18} fontWeight={600} color="text.200">
            Chit Flow
          </Heading>
          <Box
            w="154px"
            borderRadius="18px"
            border="1px solid"
            borderColor="border.100"
            h="30px"
          >
            <Flex alignItems="center" gap="12px" />
          </Box>
        </Flex>
      </Box>

      <Box textAlign="center">
        <Text color="text.800" fontSize={16}>
          No Transaction yet
        </Text>
      </Box>
    </Box>
  );
};

const InvoiceActivity = () => {
  return (
    <Box
      w="50%"
      borderRadius="8px"
      p="5"
      bg="text.500"
      boxShadow="lg"
      minH="200px"
    >
      <Box mb="14">
        <Flex alignItems="center" justifyContent="space-between" mb="2">
          <Heading fontSize={18} fontWeight={600} color="text.200">
            Invoice Activity
          </Heading>
          <Text fontSize={14} color="border.200">
            View all
          </Text>
        </Flex>
        <Box w="100%" mx="auto" h="1px" bg="border.100" />
      </Box>

      <Box textAlign="center">
        <Text color="text.800" fontSize={16}>
          No Transaction yet
        </Text>
      </Box>
    </Box>
  );
};

const Invoice = () => {
  return (
    <Box w="100%">
      <Flex alignItems="center" gap="20px">
        <ChitFlow />
        <InvoiceActivity />
      </Flex>
    </Box>
  );
};

export default Invoice;
