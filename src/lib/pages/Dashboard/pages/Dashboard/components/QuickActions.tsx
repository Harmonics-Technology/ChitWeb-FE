import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';

import {
  InvoiceIcon,
  GenerateChitIcon,
  ClaimChitIcon,
  AddFundsIcon,
  TransferFundsIcon,
  WithdrawIcon,
} from '~/lib/components/Icons';
import type { QuickActionItem } from '~/lib/utilities/schema';

const ActionButton = ({ title, bgColor, icon }: QuickActionItem) => {
  return (
    <Box boxShadow="md" borderRadius="8px" p="3">
      <Box
        bg={bgColor}
        w="50px"
        h="50px"
        mx="auto"
        borderRadius="50%"
        mb="2"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={icon} />
      </Box>
      <Text fontSize={13} color="text.400" fontWeight={500}>
        {title}
      </Text>
    </Box>
  );
};

const QuickActions = () => {
  return (
    <Box
      w="100%"
      borderRadius="8px"
      p="5"
      bg="text.500"
      boxShadow="lg"
      minH="340px"
    >
      <Box mb="16px">
        <Heading fontSize={18} fontWeight={600} color="text.200" mb="4">
          Quick Actions
        </Heading>
        <Box w="100%" mx="auto" h="1px" bg="border.100" />
      </Box>

      <Box textAlign="center">
        <Flex
          alignItems="center"
          flexWrap="wrap"
          justifyContent="center"
          gap="16px"
        >
          <ActionButton
            title="Add Funds"
            bgColor="actions.100"
            icon={AddFundsIcon}
          />
          <ActionButton
            title="Generate CHIT"
            bgColor="actions.200"
            icon={GenerateChitIcon}
          />
          <ActionButton
            title="Claim CHIT"
            bgColor="actions.300"
            icon={ClaimChitIcon}
          />
          <ActionButton
            title="Transfer Funds"
            bgColor="actions.400"
            icon={TransferFundsIcon}
          />
          <ActionButton
            title="Withdraw"
            bgColor="actions.500"
            icon={WithdrawIcon}
          />
          <ActionButton
            title="Invoice"
            bgColor="actions.600"
            icon={InvoiceIcon}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default QuickActions;
