import { Box, Flex, Text, Heading, Stack } from '@chakra-ui/react';

import { EyeIcon, DollarIcon } from '~/lib/components/Icons';
import type { WalletCardProps } from '~/lib/utilities/schema';

const WalletCard = ({
  title,
  balance,
  currency,
  date,
  headingColor,
}: WalletCardProps) => {
  return (
    <Box bg="text.500" boxShadow="lg" borderRadius="8px" w="33%" p="5">
      <Stack spacing="10px">
        <Text color="text.200">{title}</Text>
        <Box>
          <Flex alignItems="center" gap="8px">
            <Heading fontSize={20} color={headingColor}>
              {currency} {balance}
            </Heading>
            <EyeIcon />
          </Flex>
        </Box>
        <Text color="text.100" fontSize={12}>
          {date}
        </Text>
      </Stack>
    </Box>
  );
};

const Wallets = () => {
  return (
    <Box w="100%">
      <Flex alignItems="center" gap="20px">
        <WalletCard
          title="Wallet Balance"
          currency="NGN"
          balance="0.00"
          date="Thursday, 25/01/2024"
          headingColor="brand.800"
        />
        <WalletCard
          title="Chit Balance"
          currency="CT"
          balance="0.00"
          date="Thursday, 25/01/2024"
          headingColor="bg.900"
        />
        <Box bg="text.500" boxShadow="lg" borderRadius="8px" w="33%" p="5">
          <Stack spacing="10px">
            <Heading color="text.200" fontSize={18} fontWeight={600}>
              Requests
            </Heading>
            <Box>
              <Flex alignItems="center" gap="5px">
                <DollarIcon />
                <Text color="bg.600" fontSize={14} fontWeight={600}>
                  Sent Requests
                </Text>
                <Text color="bg.800" fontWeight={600}>
                  0
                </Text>
              </Flex>
            </Box>
            <Box>
              <Flex alignItems="center" gap="5px">
                <DollarIcon />
                <Text color="bg.600" fontSize={14} fontWeight={600}>
                  Received Requests
                </Text>
                <Text color="bg.700" fontWeight={600}>
                  0
                </Text>
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Wallets;
