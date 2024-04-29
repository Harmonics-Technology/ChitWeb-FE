import { Box, Heading, Text, Flex, Stack, Image } from '@chakra-ui/react';

const ScheduledTransactionItem = () => {
  return (
    <Box py="2">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Flex alignItems="center" gap="8px">
            <Image
              src="/assets/spotify.png"
              w="36px"
              h="36px"
              objectFit="cover"
            />
            <Stack spacing="5px" alignItems="flex-start">
              <Heading fontSize={14} color="text.200" fontWeight={700}>
                Spotify
              </Heading>
              <Text fontSize={12} fontWeight={600} color="border.200">
                Next Payment:{' '}
                <Box as="span" color="brand.primary">
                  15/11
                </Box>
              </Text>
            </Stack>
          </Flex>
        </Box>
        <Box>
          <Flex alignItems="flex-end" gap="2px">
            <Heading fontSize={21}>$9.15</Heading>
            <Text fontSize={12} fontWeight={600}>
              USD
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

const ScheduledPaymentsCard = () => {
  return (
    <Box
      w="100%"
      borderRadius="8px"
      p="5"
      bg="text.500"
      boxShadow="lg"
      minH="380px"
    >
      <Box mb="5">
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
        <Stack spacing="10px">
          <ScheduledTransactionItem />
          <ScheduledTransactionItem />
          <ScheduledTransactionItem />
          <ScheduledTransactionItem />
          <ScheduledTransactionItem />
        </Stack>
      </Box>
    </Box>
  );
};

export default ScheduledPaymentsCard;
