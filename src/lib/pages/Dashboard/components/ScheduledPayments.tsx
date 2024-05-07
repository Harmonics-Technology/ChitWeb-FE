import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const ScheduledPayments = () => {
  return (
    <Box
      w="100%"
      borderRadius="8px"
      p="5"
      bg="text.500"
      boxShadow="lg"
      minH="380px"
    >
      <Box mb="14">
        <Flex alignItems="center" justifyContent="space-between" mb="3">
          <Heading fontSize={18} fontWeight={600} color="text.200">
            Scheduled Payments
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

export default ScheduledPayments;
